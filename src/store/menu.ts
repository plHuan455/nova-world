import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMenusService } from 'services/menus';
import { MenuItem, StaticSlug } from 'services/menus/types';
import groupMenus from 'utils/menu';

type PrefixType = {
  newsDetail?: string;
  journeysDetail?: string;
}
interface MenuState {
  header?: MenuItem[];
  staticSlug?: StaticSlug[];
  prefix?: PrefixType;
}

const initialState: MenuState = {};

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

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setPrefixAction: ($state, action:PayloadAction<PrefixType>) => {
      $state.prefix = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getHeaderMenuAsync.fulfilled, ($state, action) => {
      $state.header = groupMenus(action.payload);
    });
  },
});

export const { setPrefixAction } = menuSlice.actions;

export default menuSlice.reducer;
