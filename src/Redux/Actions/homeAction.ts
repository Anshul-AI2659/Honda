import {createAsyncThunk} from '@reduxjs/toolkit';
import { actionNames, CommonFunctions, END_POINTS } from '../../utils';
import { API_STATUS } from '../../modals';
import { ApiMethods} from '../../services';
import axios from 'axios';
import { changeBaseURL, setAuthorizationToken, setUtype } from '../../services/ApiServices';




export const getBannerList = createAsyncThunk<any, any>(
    actionNames.bannerListType,
    async (params: any, thunkApi) => {
      try {
        changeBaseURL('https://hippdev-api.appskeeper.in')
       // changeBaseURL('product-service');
        setAuthorizationToken(params.data.accessToken)
        
        console.log("ApiRequest getBannerList : ", axios.defaults.baseURL, params);
        const query = CommonFunctions.createQueryParams({
          userType: params?.data?.userType
        });
        const apiResult: any = await ApiMethods.getApiCall(
          `${END_POINTS.commonBanner.bannerList}?${query}`,
        );
        console.log('getBannerList', apiResult);
        if (apiResult?.statusCode === API_STATUS.SUCCESS) {
          const { message, data } = apiResult;
          params?.callback && params?.callback({ ...apiResult });
        } else {
          params?.callback && params?.callback(apiResult?.response);
        }
        return apiResult?.message ? apiResult : apiResult?.response;
      } catch (error) {
        console.log('error from getBannerList', error?.response);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
  

  export const getHomeTrendingProduct = createAsyncThunk<any, any>(
    actionNames.getHomeTrendingProduct,
    async (params: any, thunkApi) => {
      try {
        // changeBaseURL('product-service');
        changeBaseURL('https://hippdev-api.appskeeper.in')
        setAuthorizationToken(params.data.accessToken)
        
        console.log("ApiRequest ApiRequest : ", axios.defaults.baseURL, params);
        let param= {
          userType:1
        }
        const query = CommonFunctions.createQueryParams(param);
        const apiResult: any = await ApiMethods.getApiCall(
          `${END_POINTS.home.homeTrendingProductList}?${query}`,
        );
  
        console.log('getHomeTrending by type apiResult', apiResult);
        if (apiResult?.statusCode === API_STATUS.SUCCESS) {
          const { message, data } = apiResult;
          params?.callback && params?.callback({ ...apiResult });
        } else {
          params?.callback && params?.callback(apiResult?.response);
        }
        return apiResult?.message ? apiResult : apiResult?.response;
      } catch (error) {
        console.log('error from api getHomeTrending list by type', error?.response);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
  
  
  export const getHomeProductType = createAsyncThunk<any, any>(
    actionNames.getHomeTrendingProduct,
    async (params: any, thunkApi) => {
      try {
        // changeBaseURL('product-service');
        changeBaseURL('https://hippdev-api.appskeeper.in')
        setAuthorizationToken(params.data.accessToken)
        setUtype(params?.data?.userType)
        
        console.log("ApiRequest ApiRequest : ", axios.defaults.baseURL, params);
        const query = CommonFunctions.createQueryParams({
          userType: params?.data?.userType
        });
        //const query = CommonFunctions.createQueryParams(param);
        const apiResult: any = await ApiMethods.getApiCall(
          `${END_POINTS.home.homeProductType}?${query}`,
        );
  
        console.log('getHome product by type apiResult', apiResult);
        if (apiResult?.statusCode === API_STATUS.SUCCESS) {
          const { message, data } = apiResult;
          params?.callback && params?.callback({ ...apiResult });
        } else {
          params?.callback && params?.callback(apiResult?.response);
        }
        return apiResult?.message ? apiResult : apiResult?.response;
      } catch (error) {
        console.log('error from api getHome product list by type', error?.response);
        return thunkApi.rejectWithValue(error);
      }
    },
  );
  