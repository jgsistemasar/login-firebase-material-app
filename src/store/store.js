
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { appSlice } from './app';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    app: appSlice.reducer,
  },
});