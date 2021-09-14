import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from './example';
import notifyReducer from './notify';
import tradingReducer from './trading';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    example: exampleReducer,
    notify: notifyReducer,
    trading: tradingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
