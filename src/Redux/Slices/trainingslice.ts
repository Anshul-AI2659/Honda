import { createSlice } from '@reduxjs/toolkit';
import { getTrainingProduct } from '../Actions/trainingAction';
import { STRINGS } from '../../utils';

const initialState = {
  trainingData: [],
  trainingError: null,
  trainingLoading: '',
};

export const trainingSlice = createSlice({
  name: 'trainingSlice',
  initialState,
  reducers: {
    clearTrainingData: (state) => {
      state.trainingData = [];
      state.trainingError = null;
      state.trainingLoading = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTrainingProduct.pending, state => {
        state.trainingLoading = STRINGS.loading;
        state.trainingError = null;
      })
      .addCase(getTrainingProduct.fulfilled, (state, action) => {
        state.trainingLoading = STRINGS.loaded;
        state.trainingData = action.payload?.data || action.payload || [];
      })
      .addCase(getTrainingProduct.rejected, (state, action) => {
        state.trainingLoading = STRINGS.error;
        state.trainingError = action.payload?.response?.data?.message || action.error.message;
      });
  },
});

export const { clearTrainingData } = trainingSlice.actions;
export const trainingReducer = trainingSlice.reducer;
