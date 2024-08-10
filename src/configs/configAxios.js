import axios from 'axios';
 import { setSnackbar } from '../store/common/common.reducer';
import {store} from "../store/index.js";
import {toggleAuth} from "../store/user/user.reducer.js";

const getBaseApi = () => process.env.REACT_APP_BASE_API;

const withoutToastRequests = [
  {
    key: '/confirm',
    method: 'put',
    resultCodes: '*',
    message: '',
    lookUpMode: 'END',
  },
];

const requestTimeoutList = {
  timeout: 1_000,
  urls: [],
};

const requestTimer = {
  requestTimeByMiliSecond: 0,
  start() {
    this.requestTimeByMiliSecond = new Date().getTime();
  },
  stop() {
    return new Date().getTime() - this.requestTimeByMiliSecond;
  },
};


const getPatternGroupFromUrl = (url, pattern, groupName) => {
  return url.match(pattern)?.groups?.[groupName] || null;
};

const fallbackProcessIfRefreshTokenHasFailed = () => {
  store.dispatch(toggleAuth());
  window.location = `${process.env.PUBLIC_URL}/`;
};

const configAxios = () => {
  let isRefreshing = false;
  let failedQueue = [];
  const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };

  axios.interceptors.request.use(
    async (config) => {
      requestTimer.start();

      const { token, type } = store.getState().user;
      const newConfig = { ...config };

      newConfig.baseURL = getBaseApi();
      if (token) {
        newConfig.headers.Authorization = `${type} ${token}`;
      }

      return newConfig;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    async (response) => {
      const requestUrl = response?.config?.url;
      const requestTime = requestTimer.stop();

      const getRealResponse = () => {
        let modifiedResponse;
        try {
          modifiedResponse = JSON.parse(JSON.stringify(response).replaceAll('<CR>', '\\n'));
        } catch {
          modifiedResponse = response;
        }
        if (modifiedResponse?.data) {
          return modifiedResponse.data;
        }

        return response;
      };

      const dataPromise = new Promise((resolve) => {
        const reqUrlInTimeOuts = requestTimeoutList.urls.find((item) =>
          item.url.includes(requestUrl),
        );
        if (
          (reqUrlInTimeOuts && !reqUrlInTimeOuts?.method) ||
          (reqUrlInTimeOuts?.method &&
            reqUrlInTimeOuts?.method.toLowerCase() === response.config.method.toLowerCase())
        ) {
          const timeOut = reqUrlInTimeOuts?.timeout || requestTimeoutList.timeout;
          setTimeout(() => {
            resolve(getRealResponse());
          }, timeOut - requestTime);
        } else {
          resolve(getRealResponse());
        }
      });

      return await dataPromise;
    },
    (err) => {
      const originalRequest = err.config;
      if (err?.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((data) => {
              originalRequest.headers.Authorization = `${data.type} ${data.token}`;
              return axios(originalRequest);
            })
            .catch((error) => Promise.reject(error));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        return new Promise((resolve, reject) => {
          const { token } = store.getState().user;
          fetch(
            `${process.env.REACT_APP_BASE_API}auth/token/refresh/${
              store.getState().user.refreshToken
            }`
          )
            .then((c) => c.json())
            .then((c) => {
              if (c.status.code === 200) {
                const { data } = c.result;
                isRefreshing = false;
                axios.defaults.headers.common.Authorization = `${data.type} ${data.token}`;
                originalRequest.headers.Authorization = `${data.type} ${data.token}`;
                processQueue(null, data);
                resolve(axios(originalRequest));
              } else throw Error('refresh token has failed');
            })
            .catch(async (error) => {
              console.log('error happened during refresh token flow', error);
              reject(error);
            });
        });
      }

      if (err?.response?.status === 403) {
        fallbackProcessIfRefreshTokenHasFailed();
      }

      const toastChecker = withoutToastRequests.find((req) => {
        if (req.lookUpMode) {
          if (req.lookUpMode === 'END') return originalRequest?.url.endsWith(req.key);
          else if (req.lookUpMode === 'START') return originalRequest?.url.startsWith(req.key);
        }
        return originalRequest?.url.includes(req.key);
      });

      const message = err?.response?.data?.error || 'خطا در برقراری ارتباط';

      const originalRequestErrorCode = err?.response?.data?.statusCode;

      const originalRequestStatusCode = err?.response?.data?.status?.code;

      if (!err.config) return;
      if (
        toastChecker &&
        (toastChecker.resultCodes === '*' ||
          toastChecker.statusCodes === '*' ||
          toastChecker.resultCodes?.includes(originalRequestErrorCode) ||
          toastChecker.statusCodes?.includes(originalRequestStatusCode)) &&
        (!toastChecker.method || toastChecker.method === originalRequest.method)
      ) {
        return Promise.reject({
          whiteListMessage: toastChecker?.message,
          code: originalRequestErrorCode,
          message: originalRequestErrorCode,
        });
      }

      if (message) store.dispatch(setSnackbar({ openSnackbar: true, message }));
      // return Promise.reject(err);
    },
  );
};

configAxios();
