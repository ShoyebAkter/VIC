import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './serviceSlice'; // Import your slice reducer

export const store = configureStore({
  reducer: {
    services: serviceReducer, // Add your slice reducer
  },
});
