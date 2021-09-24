import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import journeys from './journeys';
import locales from './locales';
import menu from './menu';
import news from './news';
import notify from './notify';
import systems from './systems';
import trading from './trading';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    notify,
    trading,
    journeys,
    menu,
    locales,
    news,
    systems,
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
