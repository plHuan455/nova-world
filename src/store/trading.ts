import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getTradingFloorsService from 'services/tradingFloors';
import TradingFloorData from 'services/tradingFloors/type';

interface InitialStateType {
  data: TradingFloorData[];
  links?: LinkData;
  meta?: Meta;
}

const initialState: InitialStateType = {
  data: [],
};

export const getTradingFloorsAsync = createAsyncThunk(
  'tradingFloors/getTradingFloors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTradingFloorsService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const tradingFloorsSlice = createSlice({
  name: 'tradingFloors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTradingFloorsAsync.fulfilled, ($state, action) => {
      $state.data = action.payload.data;
      $state.links = action.payload.links;
      $state.meta = action.payload.meta;
    });
  },
});

export default tradingFloorsSlice.reducer;
