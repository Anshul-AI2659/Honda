import {createAsyncThunk} from '@reduxjs/toolkit';
import {actionNames, CommonFunctions, END_POINTS} from '../../utils';
import {changeBaseURL, setAuthorizationToken} from '../../services/ApiServices';
import {ApiMethods} from '../../services';
import axios from 'axios';
import {API_STATUS} from '../../modals';

export const getTrainingProduct = createAsyncThunk<any, any>(
  actionNames.trainingList,
  async (params: any, thunkApi) => {
    try {
      changeBaseURL('https://hippdev-api.appskeeper.in');
      setAuthorizationToken(params.data.accessToken);
      console.log('ApiRequest ApiRequest : ', axios.defaults.baseURL, params);
      const query = CommonFunctions.createQueryParams({
        userType: params?.data?.userType,
        productType: params?.data?.productType,
        productCategory: params?.data?.productCategory,
        category: params?.data?.category,
      });

      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.training.trainingList}?${query}`,
      );
      console.log('trainingList by type apiResult', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const {message, data} = apiResult;
        params?.callback && params?.callback({...apiResult});
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log(
        'error from api getHomeTrending list by type',
        error?.response,
      );
      return thunkApi.rejectWithValue(error);
    }
  },
);
