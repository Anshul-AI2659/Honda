import {Platform} from 'react-native';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
 import {store} from '../store';
import { authAction } from '../Redux/Slices/authslice';
import { ReducerModal } from '../modals';
import { toDate } from 'date-fns';
import { navigationRef } from '../navigations/navigationServices';
import { ScreenNames } from '../utils/screenNames';

const getServiceUrls = (env = 'DEV') => {
  switch (env) {
    case 'DEV':
      return {
        // API_URL: 'https://hippdev-api.appskeeper.in/customer-service',
        // GOOGLE_API_KEY: '',
        // PRODUCT_API_URL: 'https://hippdev-api.appskeeper.in/product-service'
        API_URL:'https://hippdev-api.appskeeper.in',
        GOOGLE_API_KEY:'',
      };
  }
};

export const SERVICE_URLS = getServiceUrls('DEV');
/**f
 * setup axios instance
 */
const ApiRequest = axios.create({
  baseURL: SERVICE_URLS.API_URL,
  timeout: 30000,
  headers: {
    utype: '1',
    language: 'en',
    server_key: 'C6GRh7CX1k3x6n4ahVTrjDKS918psPby',
    accept: 'application/json',
    'Content-Type': 'application/json',
    offset: new Date().getTimezoneOffset() * 60 * 1000,
    authorization: 'Basic aG9uZGEyMDI1OmhvbmRhQDIwMjU=',
    platform: Platform.OS === 'android' ? '1' : '2',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
});

ApiRequest.interceptors.request.use(
  (config: any) => {
    const getState = store?.getState();
    return config;
  },
  error => Promise.reject(error),
);

export const changeBaseURL = (
  baseURL: string //values can be customer-service <default>, product-service
) => {
  ApiRequest.defaults.baseURL = baseURL === 'product-service'
  ? SERVICE_URLS?.PRODUCT_API_URL
  : SERVICE_URLS?.API_URL
};

export const setAuthorizationToken = (token: string) => {
  if (token.length) {
    console.log('token------>',token);
    ApiRequest.defaults.headers['authorization'] = `Bearer ${token}`;
    // $http.defaults.headers.language = 'en';
  }
  else{
    console.log('token in else------>',ApiRequest.defaults);
    ApiRequest.defaults.headers['authorization'] = `Basic aG9uZGEyMDI1OmhvbmRhQDIwMjU=`;
  }
};

export const clearAuthToken = () => {
  console.log('clearauthtoken------->',ApiRequest?.defaults?.headers['authorization']);
  ApiRequest.defaults.headers['authorization'] = 'Basic aG9uZGEyMDI1OmhvbmRhQDIwMjU=';
  console.log('clearauthtoken------->',ApiRequest?.defaults?.headers['authorization']);
};


export const setUtype = (uType:string) =>{
  if(uType){
    ApiRequest.defaults.headers['utype'] = `${uType}`
  }
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log('onResponse', response.config.url, response);
  return response.data;
};


const onErrorResponse = (error:AxiosError) => {
  console.log('🚀 ~ onErrorResponse ~ error:',error?.message, error);
  const { config, response, message } = error;
  const { method, url, data: requestData } = config || {};
  const { status, data: responseData, headers } = response || {};
  console.log('Response Data:', responseData);
  console.log('Error Message:', error);
  if (axios.isAxiosError(error)) {

    switch (status) {
      case 400:
        break;
      case 401: {
        const myStore: ReducerModal = store.getState();
        console.log('myStore', myStore);
        if (
          myStore?.authReducer?.otpVerificationResponseData?.data?.accessToken
        ) {
          store.dispatch(authAction.removeOtpData({}));
          store.dispatch(authAction.logout());
          navigationRef?.current?.reset({
            index:0,
            routes:[{name:ScreenNames.Role}]
          })
        }
        console.log('401 || UNAUTHORIZED ACCESS');
        break;
      }
      case 403:
        console.log('403 || FORBIDDEN');
        break;
      case 404:
        console.log('404 || NOT FOUND');
        break;
      case 500:
        console.log('500 || INTERNAL SERVER ERROR');
        break;
      default:
        console.log('Unhandled API Error');
        break;
    }
  } 
  // else {
  //   console.log('Non-Axios Error:', error);
  // }
  // console.log('non-axios error',error);
  
  return Promise.reject(responseData);
};

ApiRequest.interceptors.response.use(onResponse, onErrorResponse);

/**
 * export all function
 */
export default ApiRequest;



