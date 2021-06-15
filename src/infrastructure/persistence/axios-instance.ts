import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.REACT_APP_BASE_API_URL || '';

export const axiosConfig: AxiosRequestConfig = {
  baseURL,
  timeout: 15000,
  timeoutErrorMessage: 'Request timeout.',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const axiosInstance = axios.create(axiosConfig);
