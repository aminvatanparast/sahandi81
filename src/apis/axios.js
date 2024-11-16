import axios from 'axios';

const baseURL = process.env.REACT_APP_PUBLIC_URL

class Api {

  _headers(type) {
    if(type) {
      return {
        "Accept": 'application/json',
        "Content-Type": "multipart/form-data",
      }
    } else {
      return {
        "Accept": 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      }
    }

  }

  get(url , params) {
    return axios.get( baseURL +`${url}`  , {
      headers: this._headers(),
      params: params,
    }).then( (response) => {
      return response.data;
    })
  }

  post(url, object= {} , type) {
    return axios.post( baseURL + `${url}`,  object, {
      headers: this._headers(type),
    }).then( (response) => {
      return response.data;
    })
  }


}

export default Api;
