import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getNewsCategoriesService } from 'services/news';
import { CategoriesData, ParamsType } from 'services/news/types';

interface InitStateType {
  categories?: APIResponse<CategoriesData[]>;
  loading?: boolean;
}

const initialState: InitStateType = {};

export const getListCategoriesAsync = createAsyncThunk(
  'news/getListCategories',
  async (params:ParamsType, { rejectWithValue }) => {
    try {
      return await getNewsCategoriesService(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListCategoriesAsync.pending, ($state) => {
      $state.loading = true;
    });
    builder.addCase(getListCategoriesAsync.fulfilled, ($state, action) => {
      $state.categories = action.payload;
      $state.loading = false;
    });
    builder.addCase(getListCategoriesAsync.rejected, ($state) => {
      $state.loading = false;
    });
  },
});

export default newsSlice.reducer;
