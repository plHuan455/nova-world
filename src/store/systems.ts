import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getSystemsService from 'services/systems';
import { SystemsData } from 'services/systems/types';

type InitialState = {
  data?: SystemsData;
}

const initialState:InitialState = {};

export const getSystemsAsync = createAsyncThunk(
  'systems/getSystems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSystemsService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const systemsSlice = createSlice({
  name: 'systems',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSystemsAsync.fulfilled, ($state, action) => {
      $state.data = action.payload;
    });
  },
});

export default systemsSlice.reducer;
