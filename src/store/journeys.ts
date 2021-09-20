import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getJourneysService } from 'services/journeys';
import { JourneysItem, JourneysParams } from 'services/journeys/types';

interface InitialStateType {
  data: JourneysItem[];
  links?: LinkData;
  meta?: Meta;
  loading?: boolean;
}

const initialState: InitialStateType = {
  data: [],
};

export const getJourneysAsync = createAsyncThunk(
  'journeys/getJourneys',
  async (params:JourneysParams, { rejectWithValue }) => {
    try {
      const response = await getJourneysService(params);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const journeysSlice = createSlice({
  name: 'journeys',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getJourneysAsync.pending, ($state) => {
      $state.loading = true;
    });
    builder.addCase(getJourneysAsync.fulfilled, ($state, action) => {
      if (action.payload.meta.page === 1) {
        $state.data = action.payload.data;
      } else {
        $state.data = [...$state.data, ...action.payload.data];
      }
      $state.links = action.payload.links;
      $state.meta = action.payload.meta;
      $state.loading = false;
    });
    builder.addCase(getJourneysAsync.rejected, ($state) => {
      $state.loading = false;
    });
  },
});

export default journeysSlice.reducer;
