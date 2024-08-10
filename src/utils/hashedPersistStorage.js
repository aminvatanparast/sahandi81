import CryptoJS from 'crypto-js';

const SECRET = 'superSecret';


export const hashedPersistStorage = {
  ...localStorage,
  async setItem(entrieKey, entrieValue) {
    if (process.env.REACT_APP_PERSIST_HASHING === 'true') {
      if ('persist:root' in localStorage) {
        const encryptedData = CryptoJS.AES.encrypt(localStorage['persist:root'], SECRET).toString();
        window.localStorage.removeItem('persist:root');
        return window.localStorage.setItem(entrieKey, encryptedData);
      }
      let reSetLocalstorage = false;
      const isItemExist = await this.getItem(entrieKey);

      if (isItemExist === null) {
        reSetLocalstorage = true;
      } else {
        Object.entries(localStorage).forEach(([key, value]) => {
          if (key === entrieKey) {
            if (CryptoJS.AES.decrypt(value, SECRET).toString(CryptoJS.enc.Utf8) !== entrieValue) {
              reSetLocalstorage = true;
            }
          }
        });
      }

      if (reSetLocalstorage) {
        const encryptedValue = CryptoJS.AES.encrypt(entrieValue, SECRET).toString();
        return window.localStorage.setItem(entrieKey, encryptedValue);
      }
    } else {
      if ('persist:root:hashed' in localStorage) {
        const decryptedData = CryptoJS.AES.decrypt(
          localStorage['persist:root:hashed'],
          SECRET,
        ).toString(CryptoJS.enc.Utf8);
        window.localStorage.removeItem('persist:root:hashed');
        return window.localStorage.setItem(entrieKey, decryptedData);
      }
      return window.localStorage.setItem(entrieKey, entrieValue);
    }
  },
  getItem(data) {
    if (process.env.REACT_APP_PERSIST_HASHING === 'true') {
      if ('persist:root' in localStorage) {
        const decryptedData = CryptoJS.AES.encrypt(localStorage['persist:root'], SECRET).toString();
        window.localStorage.removeItem('persist:root');
        return new Promise((resolve) => resolve(decryptedData));
      }
      let res = null;

      Object.entries(localStorage).forEach(([key, value]) => {
        if (key === data) {
          try {
            res = CryptoJS.AES.decrypt(value, SECRET).toString(CryptoJS.enc.Utf8);
          } catch (e) {
            res = null;
          }
        }
      });

      return new Promise((resolve) => resolve(res));
    }
    if ('persist:root:hashed' in localStorage) {
      const decryptedData = CryptoJS.AES.decrypt(
        localStorage['persist:root:hashed'],
        SECRET,
      ).toString(CryptoJS.enc.Utf8);
      window.localStorage.removeItem('persist:root:hashed');
      return new Promise((resolve) => resolve(decryptedData));
    }

    const res = window.localStorage.getItem(data);
    return new Promise((resolve) => resolve(res));
  },
};
