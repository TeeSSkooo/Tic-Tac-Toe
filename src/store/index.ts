import { configureStore } from '@reduxjs/toolkit';

import gameReducer from './slices/gameSlice';

const store = configureStore({
  reducer: gameReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
