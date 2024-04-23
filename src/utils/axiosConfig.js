import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/api',
});

instance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        break;
    }
}
);

export default instance;