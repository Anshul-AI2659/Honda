import { createSlice } from "@reduxjs/toolkit";
import { getProfileData, locateDealerAction, updateProfileAction } from "../Actions/moreAction";
import { STRINGS } from "../../utils";


const initialState = {
    profileData: {},
    profileDataError: {},
    profileLoading: '',
    dealerData: null,
    dealerError: null,
    dealerLoading: '',
  };
  
  export const moreSlice = createSlice({
    name: 'moreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(updateProfileAction.pending, state => {
          state.profileLoading = STRINGS.loading;
        })
        .addCase(updateProfileAction.fulfilled, (state, action) => {
          state.profileLoading = STRINGS.loaded;
          state.profileData = action.meta?.arg?.param;
        })
        .addCase(updateProfileAction.rejected, (state, action) => {
          state.profileLoading = STRINGS.error;
          state.profileDataError = action.payload?.response?.data?.message;
        })
        .addCase(getProfileData.pending, state => {
          state.profileLoading = STRINGS.loading;
        })
        .addCase(getProfileData.fulfilled, (state, action) => {
          state.profileLoading = STRINGS.loaded;
          state.profileData = action.payload?.data;
        })
        .addCase(getProfileData.rejected, (state, action) => {
          state.profileLoading = STRINGS.error;
          state.profileDataError = action.payload?.response?.data?.message;
        })
        .addCase(locateDealerAction.pending, state => {
          state.dealerLoading = STRINGS.loading;
          state.dealerError = null;
        })
        .addCase(locateDealerAction.fulfilled, (state, action) => {
          state.dealerLoading = STRINGS.loaded;
          state.dealerData = action.payload?.data || action.payload; 
        })
        .addCase(locateDealerAction.rejected, (state, action) => {
          state.dealerLoading = STRINGS.error;
          state.dealerError = action.payload?.response?.data?.message || action.error.message;
        })
        
    },
  });
  

export const moreReducer = moreSlice.reducer;