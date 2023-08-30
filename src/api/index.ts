import axios, { AxiosError, AxiosInstance } from 'axios';

const token = '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';
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

// instance.defaults.headers.post['Content-Type'] = 'application/json';
// instance.defaults.headers.put['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

export default instance;
