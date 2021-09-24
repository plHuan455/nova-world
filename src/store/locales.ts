import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import getSystemsLocales from 'services/locales';

type PageTranslation = {
  isDetail?: boolean;
  translation?: Translation[]
}
interface LocalesState {
  listLocales?: LocalesResponse;
  activeLang?: keyof LocalesResponse;
  pageTranslation: PageTranslation;
}

const initialState: LocalesState = {
  pageTranslation: {},
};

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
    setPageTranslation($state, action: PayloadAction<PageTranslation | undefined>) {
      $state.pageTranslation.translation = action.payload?.translation;
      $state.pageTranslation.isDetail = action.payload?.isDetail;
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
