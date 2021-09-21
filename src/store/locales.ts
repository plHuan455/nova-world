import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import getSystemsLocales from 'services/locales';

interface LocalesState {
  listLocales?: LocalesResponse;
  activeLang?: keyof LocalesResponse;
}

const initialState: LocalesState = {};

export const getSystemsLocalesAsync = createAsyncThunk(
  'locales/getLocales',
  async (_, { rejectWithValue }) => {
    try {
      return await getSystemsLocales();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const localesSlice = createSlice({
  name: 'locales',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSystemsLocalesAsync.fulfilled, ($state, action) => {
      $state.listLocales = action.payload;
    });
  },
});

export default localesSlice.reducer;
