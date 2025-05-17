import { createSlice } from '@reduxjs/toolkit';
import { STRINGS } from '../../utils';
import { getPromotionProduct, getseemorePromotionProduct } from '../Actions/promotionAction';

const initialState = {
  promotionData: [],
  promotionError: null,
  promotionLoading: '',
  promotionSeeMoreData: [],
  promotionSeeMoreError: null,
  promotionSeeMoreLoading: '',
};

export const promotionSlice = createSlice({
  name: 'promotionSlice',
  initialState,
  reducers: {
    clearpromotionData: (state) => {
      state.promotionData = [];
      state.promotionError = null;
      state.promotionLoading = '';
      state.promotionSeeMoreData = [];
      state.promotionSeeMoreError = null;
      state.promotionSeeMoreLoading = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPromotionProduct.pending, state => {
        state.promotionLoading = STRINGS.loading;
        state.promotionError = null;
      })
      .addCase(getPromotionProduct.fulfilled, (state, action) => {
        state.promotionLoading = STRINGS.loaded;
        state.promotionData = action.payload?.data || action.payload || [];
      })
      .addCase(getPromotionProduct.rejected, (state, action) => {
        state.promotionLoading = STRINGS.error;
        state.promotionError = action.payload?.response?.data?.message || action.error.message;
      })
      .addCase(getseemorePromotionProduct.pending, state => {
        state.promotionSeeMoreLoading = STRINGS.loading;
        state.promotionSeeMoreError = null;
      })
      .addCase(getseemorePromotionProduct.fulfilled, (state, action) => {
        state.promotionSeeMoreLoading = STRINGS.loaded;
        state.promotionSeeMoreData = action.payload?.data || action.payload || [];
      })
      .addCase(getseemorePromotionProduct.rejected, (state, action) => {
        state.promotionSeeMoreLoading = STRINGS.error;
        state.promotionSeeMoreError = action.payload?.response?.data?.message || action.error.message;
      });
  },
});




export const { clearpromotionData } = promotionSlice.actions;
export const promotionReducer = promotionSlice.reducer;
