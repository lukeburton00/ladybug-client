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
    throw error;
    }
);

export default instance;
