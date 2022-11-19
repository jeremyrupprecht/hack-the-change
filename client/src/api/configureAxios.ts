import axios, { AxiosRequestConfig } from 'axios';
import { configure } from 'axios-hooks';

// TODO: Add React Toast for error handling

configure({ cache: false });

const apiUrl = 'TODO: Add your API URL here';

axios.interceptors.request.use(async (config) => {
  if (config.url?.startsWith('/v1/')) {
    config.baseURL = await apiUrl;
  }
  return config;
}, (error) => Promise.reject(error));

axios.interceptors.response.use((config) => config, (error) => {
  if (axios.isAxiosError(error)) {
    if (error.code === 'ERR_CANCELED') return;
    const data = error.response?.data as { [key: string]: any };
    const status = getAxiosErrorStatus(error);
    if (error.config.method === 'get') return Promise.reject(error); // should be handled by AxiosWrapper
    const message = data?.message as string || 'Request Error';
    // TODO: Add React Toast for error handling
    console.error(`${message}: ${status}`);
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export function getAxiosErrorStatus(error: any): string {
  if (axios.isAxiosError(error)) {
    if (error.response?.status) {
      const errorType: string = (error.response as any)?.data?.type as string || error.code || 'UNKNOWN_ERROR';
      return `${error.response.status}_${errorType}`;
    }
    // Network Error
    return `${error.code} - ${error.message}`;
  }
  return 'Unknown network error';
}
