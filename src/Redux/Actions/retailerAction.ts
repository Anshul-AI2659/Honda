import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionNames, END_POINTS } from "../../utils";
import { ApiMethods } from "../../services";
import axios from "axios";
import { loginActionResponse } from "./authAction";



export interface retailerAddData {
  countryCode:string;
  mobileNumber:string,
  name:string,
  email:string,
  city:string,

}


export const retailerAction = createAsyncThunk<
  loginActionResponse,
  retailerAddData
>(actionNames.addRetailer, async (params: retailerAddData, thunkAPI: any) => {
  try {
    let endpoint = '';
    const apiData = params?.data
    switch (apiData.roleName) {
     
      case 'Dealer':
        endpoint = END_POINTS.retailer.addRetailer;
        break;
      default:
        endpoint = END_POINTS.retailer.addRetailer; // fallback
    }
    const { roleName, ...restParams } = apiData;
    const response = await ApiMethods.postApiCall(endpoint, restParams);
    console.log('addretail',response);
    const {statusCode,message} = response
    if(statusCode === 200){
      params?.successCallBack?.(message)
    }
    else {
      params?.errorCallBack?.(message)
    }
    console.log('Login API success:', response);
    return response;
  } catch (error: any) {
    console.log('Login API Error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({
      message: 'Something went wrong',
      statusCode: 500,
    });
  }
});
