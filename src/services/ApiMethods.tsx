
import { API_STATUS } from '../modals';
import ApiRequest from './ApiServices';

/**
 *
 * @param endPoint - API endpoint
 * @param params - Request body data
 * @param customHeaders - Optional custom headers (e.g., Authorization: Bearer ...)
 * @returns formatted response object
 */
export const postApiCall = async (
  endPoint: string,
  params: any,
) => {
  console.log('post api call :', endPoint, params, ApiRequest?.defaults);

  try {
    const apiResult: any = await ApiRequest.post(endPoint, params);

    if (apiResult) {
      const { statusCode, message, data, msg } = apiResult;
      return statusCode === API_STATUS.SUCCESS || statusCode === API_STATUS.CREATED
        ? { message, data, msg, statusCode }
        : { message, data: null, msg: '', statusCode };
    }    
    throw apiResult;
  } catch (error) {
    console.log('error in login ',error);
    
    return error;
  }
};



export const postApiCallSecond = async (
  endPoint: string,
  params: any,
  headers: Record<string, string> = {} // optional headers param
) => {
  console.log('post api call:', endPoint, params, headers);

  try {
    const apiResult: any = await ApiRequest.post(endPoint, params, {
      headers,
    });

    if (apiResult) {
      const { statusCode, message, data, msg } = apiResult;
      return statusCode === API_STATUS.SUCCESS || statusCode === API_STATUS.CREATED
        ? { message, data, msg, statusCode }
        : { message, data: null, msg: '', statusCode };
    }
    
    throw apiResult;
  } catch (error) {
    console.log('error in API call:', error);
    return error;
  }
};


/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
export const getApiCall = async (endPoint: string, params = '', customHeaders: Record<string, string> = {}) => {
  try {
    const apiResult: any = await ApiRequest.get(endPoint + params);
    console.log(':::: api endPoint', endPoint);
    console.log(':::: customHeader', customHeaders);
    console.log(':::: api Result', {apiResult, params});

    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS
        ? {message, data, statusCode}
        : {message, data: null};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

/** ******************************************************************************************* */
/**
 *
 * @param endPoint api end point
 * @param params api request data
 */
export const deleteApiCall = async (
  endPoint: string,
  params = '',
  data?: any,
) => {
  try {
    const apiResult: any = await ApiRequest.delete(endPoint + params, {
      data: data,
    });
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS
        ? {message, data, statusCode}
        : {message, data: null, statusCode};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
export const putApiCall = async (endPoint: string, params = '') => {
  try {
    const apiResult: any = await ApiRequest.put(endPoint, params);
    console.log('apiRrsult----->',apiResult);
    
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS ||
        statusCode == API_STATUS.PUT_SUCCESS
        ? {message, data, statusCode}
        : {message, data: null, statusCode};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};
/**
 *
 * @param endPoint api end point
 * @param params api request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
export const patchApiCall = async (endPoint: string, params = '') => {
  try {
    const apiResult: any = await ApiRequest.patch(endPoint, params);
    if (apiResult) {
      const {statusCode, message, data} = apiResult;
      return statusCode == API_STATUS.SUCCESS ||
        statusCode == API_STATUS.PATCH_SUCCESS
        ? {message, data, statusCode}
        : {message, data: null, statusCode};
    }
    throw new Error(apiResult);
  } catch (error) {
    return error;
  }
};

export default {
  putApiCall,
  deleteApiCall,
  getApiCall,
  postApiCall,
  patchApiCall,
  postApiCallSecond
};
