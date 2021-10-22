import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getSystemsService, { getBaseSystemService } from 'services/systems';
import { SystemsData, BaseSystemData } from 'services/systems/types';

interface InitialState {
  data?: SystemsData;
  baseSystem?: BaseSystemData;
}

const initialState:InitialState = {};

export const getSystemsAsync = createAsyncThunk(
  'systems/getSystems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSystemsService();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getBaseSystemAsync = createAsyncThunk(
  'systems/getBaseSystem',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBaseSystemService();
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
    builder.addCase(getBaseSystemAsync.fulfilled, ($state, action) => {
      $state.baseSystem = action.payload;
    });
  },
});

export default systemsSlice.reducer;
