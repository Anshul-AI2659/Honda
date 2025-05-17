import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { customerSignUpAction, loginAction, OtpVerificationResponse, resendOtpActionResponse, verifyOtpAction } from '../Actions/authAction';
import { ApiRequest } from '../../services';
import { STRINGS } from '../../utils';

export const authAdapter = createEntityAdapter();
export const AUTH_SLICE = 'authSlice';
export const initialState = authAdapter.getInitialState({
  loginError: {},
  otpVerificationResponseData: null as OtpVerificationResponse | null,
  resendOtpResponse: null as resendOtpActionResponse | null,
  loginValue: {},
  isLogin: false,
  otpVerificationValue:{},
  otpVerificationError:{},
  customerProfileData: {},
  customerProfileDataError: {},
  // userProfileData:{},
  // userProfileDataError:{},
  uType: '1',
  token: '',
  
});

export const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState: initialState,
  reducers: {
    logout: () => {
      console.log('logout.,.......');
      return initialState;
    },
    removeOtpData: (state, action) => {
      return initialState;
    },
    setUserType: (state, action) => {
      state.uType = action.payload; // action.payload will be a number (1 to 4)
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAction?.pending, state => {
        state.loginLoading = STRINGS.loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginLoading = STRINGS.loaded;
        state.loginValue = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loginLoading = STRINGS.error;
        state.loginError = action.payload?.response?.data?.message;
      })
      .addCase(verifyOtpAction?.pending, state =>{
        state.loginLoading = STRINGS.loading;
      })
      .addCase(verifyOtpAction.fulfilled, (state, action) => {
        state.loginLoading = STRINGS.loaded;
        state.otpVerificationValue = action.payload;
        state.customerProfileData = action?.payload?.data
      })
      .addCase(verifyOtpAction.rejected, (state, action) => {
        state.loginLoading = STRINGS.error;
        state.otpVerificationError = action.payload?.response?.data?.message;
      })
      .addCase(customerSignUpAction?.pending, state =>{
        state.loginLoading = STRINGS.loading;
      })
      .addCase(customerSignUpAction.fulfilled, (state, action) => {
        state.loginLoading = STRINGS.loaded;
        state.customerProfileData = action.payload?.data;
      })
      .addCase(customerSignUpAction.rejected, (state, action) => {
        state.loginLoading = STRINGS.error;
        state.customerProfileDataError = action.payload?.response?.data?.message;
      })

     
  },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;

export const getLoginValue = (state: any) => {
  return state.authReducer.loginValue;
};









