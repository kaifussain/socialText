import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user/index.js';

const store = configureStore({
  reducer: {
    userLogger: userSlice
  }
});

export default store;
