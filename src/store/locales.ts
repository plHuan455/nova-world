import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import getSystemsLocales from 'services/locales';

interface LocalesState {
  listLocales?: LocalesResponse;
  activeLang?: keyof LocalesResponse;
  pageTranslation?: Translation[];
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
  reducers: {
    setPageTranslation($state, action: PayloadAction<Translation[] | undefined>) {
      $state.pageTranslation = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSystemsLocalesAsync.fulfilled, ($state, action) => {
      $state.listLocales = action.payload;
    });
  },
});

export const { setPageTranslation } = localesSlice.actions;

export default localesSlice.reducer;
