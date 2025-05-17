import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionNames, CommonFunctions, END_POINTS } from "../../utils";
import { changeBaseURL, setAuthorizationToken } from "../../services/ApiServices";
import { ApiMethods } from "../../services";
import axios from "axios";
import { API_STATUS } from "../../modals";

export const getPromotionProduct = createAsyncThunk<any, any>(
    actionNames.promotionList,
    async (params: any, thunkApi) => {
      try {
        
        // changeBaseURL('https://hippdev-api.appskeeper.in')
        setAuthorizationToken(params.data.accessToken)
        
        console.log("ApiRequest ApiRequest Promotion : ", axios.defaults.baseURL, params);
        const query = CommonFunctions.createQueryParams({
            // promotionCategory: params?.data?.promotionCategory,
            // promotionType:params?.data?.promotionCategory,
            // page: params?.data?.page,
            // limit: params?.data?.limit,
            userType: params?.data?.userType,
          });
       
        const apiResult: any = await ApiMethods.getApiCall(
          `${END_POINTS.promotion.promotionList}?${query}`,
        );
        console.log('promotionList by type apiResult', apiResult);
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
  

  export const getseemorePromotionProduct = createAsyncThunk<any, any>(
    actionNames.promotionSeeMore,
    async (params: any, thunkApi) => {
      try {
        
        changeBaseURL('https://hippdev-api.appskeeper.in')
        setAuthorizationToken(params.data.accessToken)
        
        console.log("ApiRequest ApiRequest : ", axios.defaults.baseURL, params);
        const query = CommonFunctions.createQueryParams({
            promotionCategory: params?.data?.promotionCategory,
            page: params?.data?.page,
            limit: params?.data?.limit,
            userType: params?.data?.userType,
          });
       
        const apiResult: any = await ApiMethods.getApiCall(
          `${END_POINTS.promotion.promotionSeeMore}?${query}`,
        );
        console.log('promotionList by type apiResult', apiResult);
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
  