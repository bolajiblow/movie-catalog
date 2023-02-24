import axios, { AxiosError, AxiosResponse } from 'axios'
import { HttpErrorResponse, HttpResponse } from '../interfaces/httpResponse.model';
import { httpStatusCode } from '../interfaces/httpStatus.model';
import { destroyUserSession, getAuthToken } from './auth.service';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});


// Add a request interceptor
httpClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config.headers){
      config.headers.Authorization =  `Bearer ${getAuthToken()}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  httpClient.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => response,

    (error: AxiosError<HttpErrorResponse>) => {
      // const originalRequest = error.config;
      const status = error.response ? error.response.status : null;
      if(status === httpStatusCode.UNAUTHORIZED){
        destroyUserSession();
        window.location.replace('/')
      }
      return Promise.reject(error.response)
    }
)




export {httpClient, axios};