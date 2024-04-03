import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001',
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

export default instance;