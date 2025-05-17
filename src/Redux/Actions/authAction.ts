import {createAsyncThunk} from '@reduxjs/toolkit';
import { actionNames, CommonFunctions, END_POINTS } from '../../utils';
import { API_STATUS } from '../../modals';
import { ApiMethods, SERVICE_URLS } from '../../services';
import axios from 'axios';
import { changeBaseURL, clearAuthToken, setAuthorizationToken, setUtype } from '../../services/ApiServices';
import { authAction } from '../Slices/authslice';
import { persistor } from '../../store'
export interface UserCredentials {
  countryCode: string;
  mobileNumber: string;
  roleName: 'Customer' | 'Dealer' | 'Retailer' | 'Employee';
}
export interface contactUsCredentials {
  name: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  inquiryType: string;
  category: string;
  description: string;
  media: string;
  uType:any;
}

export interface customerSignupData {
  countryCode:string;
  mobileNumber:string,
  name:string,
  email:string,
  state:string,
  city:string,
  deviceToken:string,
  deviceType:string
}

export interface addToFvrtData {
  productId:string
}

export interface loginActionResponse {
  statusCode: number;
  type: string;
  message: string;
}
export interface registerData {
  firstName: string;
  lastName: string;
  phoneNo: string;
  email: string;
  country: string;
  countryCode: string;
  deviceId: string;
  deviceToken: string;
  deviceName: string;
}

export interface otpVerification {
  deviceType: string;
  countryCode: string;
  mobileNumber: string;
  otp: number;
  deviceToken:string;
  roleName: 'Customer' | 'Dealer' | 'Retailer' | 'Employee';
}

export interface emailOtpVerification {
  email:string;
  otp:number;
  roleName: 'Customer' | 'Dealer' | 'Retailer' | 'Employee';
  accessToken: string
}


export interface sendEmailOtpVerification {
  email:string;
  roleName: 'Customer' | 'Dealer' | 'Retailer' | 'Employee';
  accessToken: string
}


interface RegisterResponse {
  data: {
    _id: string;
    email: string;
    phoneNo: string;
  };
  message: string;
  statusCode: number;
  type: string;
}

export interface OtpVerificationResponse {
  statusCode: number;
  type: string;
  data: {
    accessToken: string;
  };
  message: string;
}

export interface resendOtpActionResponse {
  statusCode: number;
  type: string;
  message: string;
}
export interface uploadImageProfile {
  profilePicture: string;
}
export interface loginActionResponse {
  statusCode: number;
  type: string;
  message: string;
}

export interface contactUsActionResponse {
  statusCode: number;
  type: string;
  message: string;
}

export interface uploadMedia{
  statusCode: number;
  fileType: string;
}

export interface uploadMediaResponse{
  fileName: string;
  type: string;
  message: string;
}


export const loginAction = createAsyncThunk<
  loginActionResponse,
  UserCredentials
>(actionNames.loginAction, async (params: UserCredentials, thunkAPI: any) => {
  try {
    let endpoint = '';
    const apiData = params?.data
    switch (apiData.roleName) {
      case 'Customer':
        endpoint = END_POINTS.authUser.loginCustomer;
        break;
      case 'Dealer':
        endpoint = END_POINTS.authUser.loginDealer;
        break;
      case 'Retailer':
        endpoint = END_POINTS.authUser.loginRetailer;
        break;
      case 'Employee':
        endpoint = END_POINTS.authUser.loginEmployee;
        break;
      default:
        endpoint = END_POINTS.authUser.loginEmployee; // fallback
    }
    const { roleName, ...restParams } = apiData;
    const response = await ApiMethods.postApiCall(endpoint, restParams);
    console.log('responsnsnsns',response);
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


export const customerSignUpAction = createAsyncThunk<
  loginActionResponse,
  customerSignupData
>(actionNames.customerSiginUp, async (params: customerSignupData, thunkAPI: any) => {
  try {
    console.log("Checking signup params:", params?.userType);
    setUtype(params?.userType);
    const { successCallBack, errorCallBack, ...restParams } = params;
    const response = await ApiMethods.postApiCall(
      END_POINTS.customerSignUp,
      restParams,
    );
    console.log("Signup API response:", response);
    const { statusCode, message } = response;
    if (statusCode === 200) {
      thunkAPI.dispatch(authAction.setToken(response.data?.accessToken)); 
      successCallBack?.(message);
    } else {
      errorCallBack?.(message);
    }
    return response;
  } catch (error: any) {
    console.log('Signup API error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({
      message: 'Something went wrong during signup.',
      statusCode: 500,
    });
  }
});



export const markAsFavorite = createAsyncThunk<
  loginActionResponse,
  addToFvrtData
>(actionNames.addToFavAction, async (params: addToFvrtData, thunkAPI: any) => {
  try {
    console.log("Checking mark as fvrt params:", params?.userType);
    const { successCallBack, errorCallBack, ...restParams } = params;
    const response = await ApiMethods.postApiCall(
      END_POINTS.favorite?.addToFavorite,
      restParams,
    );
    console.log("mark as fvrt API response:", response);
    const { statusCode, message } = response;
    if (statusCode === 200) {
      successCallBack?.(message);
    } else {
      errorCallBack?.(message);
    }
    return response;
  } catch (error: any) {
    console.log('mark as fvrt API error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({
      message: 'Something went wrong during mark as fvrt.',
      statusCode: 500,
    });
  }
});

export const uploadMediaAction = createAsyncThunk<
uploadMedia,
uploadMediaResponse
>(actionNames.uploadMediaAction, async (params: uploadMediaResponse , thunkAPI: any) => {
  // changeBaseURL('https://hippdev-api.appskeeper.in/customer-service');
  changeBaseURL('https://hippdev-api.appskeeper.in');
  try {
    const apiData = params?.data
    const {restParams } = apiData;
    const response = await ApiMethods.postApiCall(END_POINTS?.commonMediaUpload?.mediaUpload, restParams);
    console.log('response on uploadMediaAction',response);
    const {statusCode,message} = response
    if(statusCode === 200){
      params?.successCallBack?.(message)
    }
    else {
      params?.errorCallBack?.(message)
    }
    console.log('upload media API success:', response);
    return response;
  } catch (error: any) {
    console.log('upload media API Error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({
      message: 'Something went wrong',
      statusCode: 500,
    });
  }
});




export const verifyOtpAction = createAsyncThunk<
OtpVerificationResponse,
otpVerification
>(actionNames.otpVerificationAction, async (params: otpVerification, thunkAPI: any) => {
  try {
    let endpoint = '';
    console.log('paramssss in verifyotp action',params);
    switch (params.roleName) {
      case 'Customer':
        endpoint = END_POINTS.authUser.verifyOtpCustomer;
        break;
      case 'Dealer':
        endpoint = END_POINTS.authUser.verifyOtpDealer;
        break;
      case 'Retailer':
        endpoint = END_POINTS.authUser.verifyOtpRetailer;
        break;
      case 'Employee':
        endpoint = END_POINTS.authUser.verifyOtpEmployee;
        break;
      default:
        endpoint = END_POINTS.authUser.verifyOtpCustomer; // fallback
    }

    const { roleName, ...restParams } = params; // remove roleName from payload

    const response = await ApiMethods.postApiCall(endpoint, restParams);
    console.log("verify otp API Response: ", response);
    return response;
  } catch (error) {
    console.log('verify otp API Error:', error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const verifyEmailOTP = createAsyncThunk<
  OtpVerificationResponse,
  emailOtpVerification
>(
  actionNames.emailVerificationOtpAction,
  async (params: emailOtpVerification, thunkAPI: any) => {
    console.log('Incoming Params:', params);

    try {
      // Destructure to remove uType and roleName from the payload
      const { uType, roleName, ...requestPayload } = params;

      // Choose endpoint using uType
      let endpoint = '';
      switch (uType) {
        case 1:
          endpoint = END_POINTS.authUser.verifyEmailOtpCustomer;
          break;
        case 2:
          endpoint = END_POINTS.authUser.verifyEmailOtpDealer;
          break;
        case 3:
          endpoint = END_POINTS.authUser.verifyEmailOtpRetailer;
          break;
        case 4:
          endpoint = END_POINTS.authUser.verifyEmailOtpEmployee;
          break;
        default:
          endpoint = END_POINTS.authUser.verifyEmailOtpCustomer;
      }

      // Optional safety check
      if ('uType' in requestPayload || 'roleName' in requestPayload) {
        console.warn('❌ uType or roleName is still present in requestPayload:', requestPayload);
      }

      console.log('Final Payload (should NOT include uType or roleName):', requestPayload);

      // Update base URL if needed
      changeBaseURL('https://hippdev-api.appskeeper.in');

      // Send payload to API
      const response = await ApiMethods.postApiCall(endpoint, requestPayload);
      console.log('✅ verifyEmailOTP API Response:', response);

      return response;
    } catch (error) {
      console.log('❌ verifyEmailOTP API Error:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);


      


export const sendEmailOtp = createAsyncThunk<
  OtpVerificationResponse,
  sendEmailOtpVerification
>(
  actionNames.emailVerificationOtpAction,
  async (params: sendEmailOtpVerification, thunkAPI: any) => {
    try {
      let endpoint = '';

      const { uType, ...payload } = params; // extract uType, keep only the payload

      console.log('Incoming Params:', params);

      switch (uType) {
        case 1:
          endpoint = END_POINTS?.authUser?.sendEmailOtpCustomer;
          break;
        case 2:
          endpoint = END_POINTS?.authUser?.sendEmailOtpDealer;
          break;
        case 3:
          endpoint = END_POINTS?.authUser?.sendEmailOtpRetailer;
          break;
        case 4: // Fixing logic error: Employee should be uType 4 (not repeating 3)
          endpoint = END_POINTS?.authUser?.sendEmailOtpEmployee;
          break;
        default:
          endpoint = END_POINTS?.authUser?.sendEmailOtpCustomer;
      }

      changeBaseURL('https://hippdev-api.appskeeper.in');

      const response = await ApiMethods.postApiCall(endpoint, payload); // send only { email }
      console.log("Send email OTP API Response: ", response);
      return response;
    } catch (error) {
      console.log('Send email OTP API Error:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);




export const updateNotificationAction = createAsyncThunk<any, any>(
  actionNames.updateNotificationAction,
  async (params: any, thunkApi) => {
    try {
      const apiResult: any = await ApiMethods.putApiCall(
        END_POINTS.settings.notificationsSetting,
        params.param,
        { Authorization: `Bearer ${params.token}` }, // ⬅️ headers here
      );

      const { statusCode, data, status } = apiResult;
      console.log('🚀 ~ statusCode:', status);
      console.log('✅ updateNotification success: ', apiResult);

      params.callback && params.callback({ ...apiResult });
    } catch (error) {
      console.log('❌ updateNotification error:', error);
      params.callback && params.callback(error?.response);
      return thunkApi.rejectWithValue(error);
    }
  }
);

// export const getBannerList = createAsyncThunk<any, any>(
//   actionNames.bannerListType,
//   async (params: any, thunkApi) => {
//     try {
//       changeBaseURL('https://hippdev-api.appskeeper.in')
//      // changeBaseURL('product-service');
//       setAuthorizationToken(params.data.accessToken)
      
//       console.log("ApiRequest getBannerList : ", axios.defaults.baseURL, params);
//       const query = CommonFunctions.createQueryParams({
//         userType: params?.data?.userType
//       });
//       const apiResult: any = await ApiMethods.getApiCall(
//         `${END_POINTS.commonBanner.bannerList}?${query}`,
//       );
//       console.log('getBannerList', apiResult);
//       if (apiResult?.statusCode === API_STATUS.SUCCESS) {
//         const { message, data } = apiResult;
//         params?.callback && params?.callback({ ...apiResult });
//       } else {
//         params?.callback && params?.callback(apiResult?.response);
//       }
//       return apiResult?.message ? apiResult : apiResult?.response;
//     } catch (error) {
//       console.log('error from getBannerList', error?.response);
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );


export const getProductListByType = createAsyncThunk<any, any>(
  actionNames.getProductListByType,
  async (params: any, thunkApi) => {
    try {
      // changeBaseURL('product-service');
      changeBaseURL('https://hippdev-api.appskeeper.in')
      setAuthorizationToken(params.data.accessToken)
      
      console.log("ApiRequest ApiRequest : ", axios.defaults.baseURL, params);
      let param= {
        type:1,
        userType:1
      }
      const query = CommonFunctions.createQueryParams(param);
      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.product.productListByType}?${query}`,
      );
      console.log('getProductList by type apiResult', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const { message, data } = apiResult;
        params?.callback && params?.callback({ ...apiResult });
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log('error from api getProductList by type', error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);


// export const getHomeTrendingProduct = createAsyncThunk<any, any>(
//   actionNames.getHomeTrendingProduct,
//   async (params: any, thunkApi) => {
//     try {
//       // changeBaseURL('product-service');
//       changeBaseURL('https://hippdev-api.appskeeper.in')
//       setAuthorizationToken(params.data.accessToken)
      
//       console.log("ApiRequest ApiRequest : ", axios.defaults.baseURL, params);
//       let param= {
//         userType:1
//       }
//       const query = CommonFunctions.createQueryParams(param);
//       const apiResult: any = await ApiMethods.getApiCall(
//         `${END_POINTS.home.homeTrendingProductList}?${query}`,
//       );

//       console.log('getHomeTrending by type apiResult', apiResult);
//       if (apiResult?.statusCode === API_STATUS.SUCCESS) {
//         const { message, data } = apiResult;
//         params?.callback && params?.callback({ ...apiResult });
//       } else {
//         params?.callback && params?.callback(apiResult?.response);
//       }
//       return apiResult?.message ? apiResult : apiResult?.response;
//     } catch (error) {
//       console.log('error from api getHomeTrending list by type', error?.response);
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );


// export const getHomeProductType = createAsyncThunk<any, any>(
//   actionNames.getHomeTrendingProduct,
//   async (params: any, thunkApi) => {
//     try {
//       // changeBaseURL('product-service');
//       changeBaseURL('https://hippdev-api.appskeeper.in')
//       setAuthorizationToken(params.data.accessToken)
//       setUtype(params?.data?.userType)
      
//       console.log("ApiRequest ApiRequest : ", axios.defaults.baseURL, params);
//       const query = CommonFunctions.createQueryParams({
//         userType: params?.data?.userType
//       });
//       //const query = CommonFunctions.createQueryParams(param);
//       const apiResult: any = await ApiMethods.getApiCall(
//         `${END_POINTS.home.homeProductType}?${query}`,
//       );

//       console.log('getHome product by type apiResult', apiResult);
//       if (apiResult?.statusCode === API_STATUS.SUCCESS) {
//         const { message, data } = apiResult;
//         params?.callback && params?.callback({ ...apiResult });
//       } else {
//         params?.callback && params?.callback(apiResult?.response);
//       }
//       return apiResult?.message ? apiResult : apiResult?.response;
//     } catch (error) {
//       console.log('error from api getHome product list by type', error?.response);
//       return thunkApi.rejectWithValue(error);
//     }
//   },
// );

export const getProductListByCategory = createAsyncThunk<any, any>(
  actionNames.getProductListByCategory,
  async (params: any, thunkApi) => {
    try {
      console.log('params............>',params);
      
      // changeBaseURL('product-service');
      changeBaseURL('https://hippdev-api.appskeeper.in')
      setAuthorizationToken(params.data.accessToken)
      // setUtype(params?.data?.userType)
      
      console.log("ApiRequest getProductList by category : ", axios.defaults.baseURL, params);
      const query = CommonFunctions.createQueryParams({
        page:params?.data?.page,
        limit: params?.data?.limit,
        search: '',
        productType: params?.data?.productType,
        productCategory: params?.data?.productCategory,
        productSubCategory: params?.data?.productSubCategory,
        userType: params?.data?.userType
      });
      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.product?.productListByCategory}?${query}`,
      );

      console.log('getProduct by category data', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const { message, data } = apiResult;
        params?.callback && params?.callback({ ...apiResult });
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log('error from api getProduct by category', error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);


export const getMoreProductList = createAsyncThunk<any, any>(
  actionNames.getProductListByCategory,
  async (params: any, thunkApi) => {
    try {
      console.log('params............>',params);
      changeBaseURL('https://hippdev-api.appskeeper.in')
      setAuthorizationToken(params.data.accessToken)
      console.log("ApiRequest get more ProductList : ", axios.defaults.baseURL, params);
      const query = CommonFunctions.createQueryParams({
        page:params?.data?.page,
        limit: params?.data?.limit,
        search: '',
        productType: params?.data?.productType,
        minPrice: params?.data?.minPrice,
        maxPrice: params?.data?.maxPrice,
        productCategory: params?.data?.productCategory,
        sortingBy: params?.data?.sortingBy,
        productSubCategory: params?.data?.productSubCategory,
        userType: params?.data?.userType,
        subType: params?.data?.subType,
      });
      const apiResult: any = await ApiMethods.getApiCall(
        `${END_POINTS.home?.seeMoreProducts}?${query}`,
      );

      console.log('get more ProductList data', apiResult);
      if (apiResult?.statusCode === API_STATUS.SUCCESS) {
        const { message, data } = apiResult;
        params?.callback && params?.callback({ ...apiResult });
      } else {
        params?.callback && params?.callback(apiResult?.response);
      }
      return apiResult?.message ? apiResult : apiResult?.response;
    } catch (error) {
      console.log('error from api get more ProductList', error?.response);
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const logoutUser = () => {
  return {
    type: 'RESET_STORE',
  };
};


export const logoutAction = createAsyncThunk<any, any>(
  actionNames.logoutAction,
  async (params: any, thunkAPI: any) => {
    try {
    let endpoint = '';
    switch (params.roleName) {
      case 'Customer':
        endpoint = END_POINTS?.logoutUser.logOutCustomer;
        break;
      case 'Dealer':
        endpoint = END_POINTS?.logoutUser.logOutDealer;
        break;
      case 'Retailer':
        endpoint = END_POINTS?.logoutUser.logOutRetailer;
        break;
      case 'Employee':
        endpoint = END_POINTS?.logoutUser.logOutEmployee;
        break;
      default:
        endpoint = END_POINTS?.logoutUser.logOutCustomer;
    }
      console.log('params at logout api',params);
      setAuthorizationToken('')
      clearAuthToken()
      // setUtype(params?.data?.userType)
      thunkAPI.dispatch(authAction.logout()); 
      persistor.purge();
      //const response = await ApiMethods.putApiCall(endpoint,'');
      // console.log('logoutt res ----->',response);
      // if (
      //   response?.statusCode === API_STATUS.SUCCESS ||
      //   response?.statusCode === API_STATUS.PUT_SUCCESS
      //   ) {

      // }
     // return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);



export const contactUsAction = createAsyncThunk<
 contactUsActionResponse,
 contactUsCredentials
>(actionNames.loginAction, async (params: contactUsCredentials, thunkAPI: any) => {
  try {
    let endpoint = '';
    const { uType, ...payload } = params; // extract uType, keep only the payload

    console.log('Incoming Contact Params:', params);
    switch (uType) {
      case 1:
        endpoint = END_POINTS?.settings?.contactUs;
        break;
      case 2:
        endpoint =  END_POINTS?.settings?.contactUs;
        break;
      case 3:
        endpoint =  END_POINTS?.settings?.contactUs;
        break;
      case 4: // Fixing logic error: Employee should be uType 4 (not repeating 3)
        endpoint =  END_POINTS?.settings?.contactUs;
        break;
      default:
        endpoint = END_POINTS?.authUser?.sendEmailOtpCustomer;
    }
    changeBaseURL('https://hippdev-api.appskeeper.in');
    const response = await ApiMethods.postApiCall(endpoint, payload); // send only { email }
    console.log("contactUs API Response: ", response);
    return response;
  } 
  catch (error: any) {
    console.log('contactUs API Error:', error);
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({
      message: 'Something went wrong',
      statusCode: 500,
    });
  }
});


export const getProductDetail = createAsyncThunk<any, any>(
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
        `${END_POINTS.product.productDetailes}?${query}`,
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

