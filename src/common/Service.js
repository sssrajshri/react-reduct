import axios from 'axios';
import _ from 'lodash';
import constants from './Constants';
import logger from './Logger';
import StorageService from './StorageService';
import { loadProgressBar } from './Progressbar';
import { SERVER_NOT_RESPONDING } from './constants/Common';

export class HTTPClient {
  /**
     * Create an Axios Client with defaults
     */
  constructor(pb = true) {
    let token = StorageService.getItem('csrf');
    const loanRef = StorageService.getItem('sessloanRef');
    token = _.isEmpty(token) ? '' : token;
    const client = axios.create({
      baseURL: constants.common.API.url,
      headers: { Pragma: 'no-cache', csrf: token || null, loanRef: loanRef || null },
      timeout: constants.common.API.requestTimeOut,
    });
    this.client = client;
    // request interceptors
    if (pb) {
      loadProgressBar(this.client);
    }
    // response interceptors
    this.client.interceptors.response.use(
      (response) => {
        logger.debug('Request Successful!', response);
        return response;
      },
      (error) => {
        logger.error('Request Failed:', error.config);
        const customErrorResponse = {
          data: {
            msg: SERVER_NOT_RESPONDING.description
          }
        };
        return Promise.reject(error.response || customErrorResponse);
      }
    );
  }

  updateServiceToken(token, loanRef) {
    // Alter defaults after instance has been created
    this.client.defaults.headers.csrf = token;
    this.client.defaults.headers.loanRef = loanRef;
  }

  request(options) {
    return this.client(options);
  }

  get(url, options = {}) {
    return this.client.get(url, options);
  }

  delete(url, options = {}) {
    return this.client.delete(url, options);
  }

  post(url, data, options = {}, isFileUpload = false) {
    if (isFileUpload) {
      this.client.defaults.headers['Content-Type'] = 'multipart/form-data';
      return this.client.post(url, data);
    }
    this.client.defaults.headers['Content-Type'] = 'application/json';
    return this.client.post(url, data, options);
  }

  put(url, data, options = {}) {
    return this.client.put(url, data, options);
  }

  patch(url, data, options = {}) {
    return this.client.patch(url, data, options);
  }
}

const service = new HTTPClient();
export default service;

// Example - (put relative path in import statement)
// import service from '../../common/service';
// service.post('/posts/', { p1: 1, p2: 2, p3: 3 }).then((resp) => {
//     window.console.log(resp);
//   });

// service.updateServiceToken('token'); // use this to update auth token
