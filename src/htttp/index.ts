import axios, { InternalAxiosRequestConfig } from 'axios';
import { API_URL } from './url';

export const $host = axios.create({
  baseURL: API_URL,
});

export const $authHost = axios.create({
  baseURL: API_URL,
});

const authIntercepter = (config: InternalAxiosRequestConfig<unknown>) => {
  if (!config?.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authIntercepter);
