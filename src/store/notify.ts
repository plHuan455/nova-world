import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotifyState {
  type?: 'success' | 'warning';
  message?: string;
  isOpen?: boolean;
}

interface PayloadActionNotify {
  type?: 'success' | 'warning';
  message?: string;
}

const initialState: NotifyState = {};

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    openNotify($state, action: PayloadAction<PayloadActionNotify>) {
      $state.type = action.payload.type;
      $state.message = action.payload.message;
      $state.isOpen = true;
    },
    closeNotify($state) {
      $state.type = undefined;
      $state.message = undefined;
      $state.isOpen = false;
    },
  },
});

export const { openNotify, closeNotify } = notifySlice.actions;

export default notifySlice.reducer;
