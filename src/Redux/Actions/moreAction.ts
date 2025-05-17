import {createAsyncThunk} from '@reduxjs/toolkit';
import {actionNames, CommonFunctions, END_POINTS} from '../../utils';
import {API_STATUS} from '../../modals';
import {ApiMethods} from '../../services';
import axios from 'axios';
import {
  changeBaseURL,
  setAuthorizationToken,
  setUtype,
} from '../../services/ApiServices';

export interface contactUsCredentials {
  name: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  inquiryType: string;
  category: string;
  description: string;
  media: string;
  uType: any;
}

export interface contactUsActionResponse {
  statusCode: number;
  type: string;
  message: string;
}
export const getDownloadContentType = createAsyncThunk<any, any>(
  actionNames.getDownloadContent,
  async (params: any, thunkApi) => {
    try {
      // changeBaseURL('product-service');
      changeBaseURL('https://hippdev-api.appskeeper.in');
      setAuthorizationToken(params.data.accessToken);
      setUtype(params?.data?.userType);

      console.log('ApiRequest ApiRequest : ', axios.defaults.baseURL, params);
      const query = CommonFunctions.createQueryParams({
        productType: params?.data?.productType,
        productCategory: params?.data?.productCategory,
      });
      //const query = CommonFunctions.createQueryParams(param);
      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.settings.downloadContent}?${query}`,
      );

      console.log('getHome product by type apiResult', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const {message, data} = apiResult;
        params?.callback && params?.callback({...apiResult});
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log(
        'error from api getHome product list by type',
        error?.response,
      );
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const updateProfileAction = createAsyncThunk<any, any>(
  actionNames.updateProfileAction,
  async (params: any, thunkApi) => {
    // setAuthorizationToken(`Bearer ${params.token}`)
    // changeBaseURL('https://hippdev-api.appskeeper.in/customer-service');
    changeBaseURL('https://hippdev-api.appskeeper.in');
    try {
      let endpoint = '';
      const apiData = params?.uType;
      console.log('data on updateProfileAction', apiData, params);

      switch (apiData) {
        case 1:
          endpoint = END_POINTS?.more?.updateProfileCustomer;
          break;
        case 2:
          endpoint = END_POINTS?.more?.updateProfileDealer;
          break;
        case 3:
          endpoint = END_POINTS?.more?.updateProfileRetailer;
          break;
        case 4:
          endpoint = END_POINTS?.more?.updateProfileEmployee;
          break;
        default:
          endpoint = END_POINTS?.more?.updateProfileCustomer; // fallback
      }

      const apiResult: any = await ApiMethods.putApiCall(
        endpoint,
        params.param,
        // { Authorization: `Bearer ${params.token}` }, // ⬅️ headers here
      );

      const {statusCode, data, status} = apiResult;
      console.log('🚀 ~ statusCode:', status);
      console.log('✅ updateProfile success: ', apiResult);
      console.log(
        'Request Payload:',
        JSON.stringify(params.param, null, 2),
        endpoint,
      );
      params.callback && params.callback({...apiResult});
    } catch (error) {
      console.log('❌ updateProfile error:', error);
      params.callback && params.callback(error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const getProfileData = createAsyncThunk<any, any>(
  actionNames.getPorfileData,
  async (params: any, thunkApi) => {
    try {
      changeBaseURL('https://hippdev-api.appskeeper.in');
      // changeBaseURL('product-service');
      setAuthorizationToken(params.data.accessToken);

      let param = {
        userType: params?.data?.userType,
      };
      console.log('smskmskmsksmksmksmksmksmksm', param?.userType);
      console.log(
        'ApiRequest getBannerList : ',
        axios.defaults.baseURL,
        params,
      );
      let endpoint = '';
      switch (param?.userType) {
        case 1:
          endpoint = END_POINTS.getProfileDetail?.getCustomerProfile;
          break;
        case 2:
          endpoint = END_POINTS.getProfileDetail?.getDealerProfile;
          break;
        case 3:
          endpoint = END_POINTS.getProfileDetail?.getRetailerProfile;
          break;
        case 4:
          endpoint = END_POINTS.getProfileDetail?.getEmployeeProfile;
          break;
        default:
          endpoint = END_POINTS.getProfileDetail?.getCustomerProfile;
      }
      const query = CommonFunctions.createQueryParams(param);
      const apiResult: any = await ApiMethods.getApiCall(
        `${endpoint}?${query}`,
      );

      console.log('get profile detail', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const {message, data} = apiResult;
        params?.callback && params?.callback({...apiResult});
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log('error from getProfile detail', error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const contactUsAction = createAsyncThunk<
  contactUsActionResponse,
  contactUsCredentials
>(
  actionNames.loginAction,
  async (params: contactUsCredentials, thunkAPI: any) => {
    try {
      let endpoint = '';
      const {uType, ...payload} = params; // extract uType, keep only the payload

      console.log('Incoming Params:', params);
      switch (uType) {
        case 1:
          endpoint = END_POINTS?.settings?.contactUs;
          break;
        case 2:
          endpoint = END_POINTS?.settings?.contactUs;
          break;
        case 3:
          endpoint = END_POINTS?.settings?.contactUs;
          break;
        case 4: // Fixing logic error: Employee should be uType 4 (not repeating 3)
          endpoint = END_POINTS?.settings?.contactUs;
          break;
        default:
          endpoint = END_POINTS?.authUser?.sendEmailOtpCustomer;
      }
      changeBaseURL('https://hippdev-api.appskeeper.in');
      const response = await ApiMethods.postApiCall(endpoint, payload); // send only { email }
      console.log('contactUs API Response: ', response);
      return response;
    } catch (error: any) {
      console.log('contactUs API Error:', error);
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue({
        message: 'Something went wrong',
        statusCode: 500,
      });
    }
  },
);

export const getSlabList = createAsyncThunk<any, any>(
  actionNames.getSlabList,
  async (params: any, thunkApi) => {
    try {
      changeBaseURL('https://hippdev-api.appskeeper.in');
      setAuthorizationToken(params.data.accessToken);
      setUtype(params?.data?.userType);

      console.log('ApiRequest ApiRequest : ', axios.defaults.baseURL, params);
      const query = CommonFunctions.createQueryParams({
        type: params?.data?.userType,
      });
      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.settings.slabList}?${query}`,
      );
      console.log('slab list apiResult', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const {message, data} = apiResult;
        params?.callback && params?.callback({...apiResult});
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log('error from api slab list', error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const locateDealerAction = createAsyncThunk<any, any>(
  actionNames.locateDealer,
  async (params: any, thunkApi) => {
    try {
      const query = CommonFunctions.createQueryParams({
        state: params?.data?.state,
        city: params?.data?.city,
        pincode: params?.data?.pincode,
        latitude: params?.data?.latitude,
        longitude: params?.data?.longitude,
      });

      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.settings.locateDealer}?${query}`,
      );

      console.log('locate dealer apiResult', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const {message, data} = apiResult;
        params?.callback && params?.callback({...apiResult});
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log('error from api slab list', error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);
