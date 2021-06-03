import axios, { AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  timeout: 15000,
  baseURL: 'https://www.alphavantage.co',
  timeoutErrorMessage: 'Request timeout.',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const axiosInstance = axios.create(axiosConfig);
