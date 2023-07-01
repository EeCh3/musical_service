import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import userReducer from './userSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
});