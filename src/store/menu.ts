import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getMenusService, getStaticSlugService } from 'services/menus';
import { MenuItem, StaticSlug } from 'services/menus/types';
import groupMenus from 'utils/menu';

interface MenuState {
  header?: MenuItem[];
  staticSlug?: StaticSlug[];
}

const initialState: MenuState = {
  header: undefined,
  staticSlug: undefined,
};

export const getHeaderMenuAsync = createAsyncThunk(
  'menu/getMenu',
  async (_, { rejectWithValue }): Promise<MenuItem[] | any> => {
    try {
      const response = await getMenusService('header-menu');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getStaticSlugAsync = createAsyncThunk(
  'menu/getStaticSlug',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getStaticSlugService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHeaderMenuAsync.fulfilled, ($state, action) => {
      $state.header = groupMenus(action.payload);
    });
    builder.addCase(getStaticSlugAsync.fulfilled, ($state, action) => {
      $state.staticSlug = action.payload;
    });
  },
});

export default menuSlice.reducer;
