import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UTMParams } from 'services/contact/type';

interface UtmState {
  data?: UTMParams;
}

const initialState: UtmState = {};

export const utmSlice = createSlice({
  name: 'utm',
  initialState,
  reducers: {
    addUtmParams($state, action: PayloadAction<UTMParams>) {
      $state.data = action.payload;
    },
  },
});

export const { addUtmParams } = utmSlice.actions;

export default utmSlice.reducer;
