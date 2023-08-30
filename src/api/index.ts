import axios, { AxiosError, AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`;
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

export default instance;
