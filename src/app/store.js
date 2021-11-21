import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';
import otherReducer from '../features/car/otherSlice';

export const store = configureStore({
  reducer: {
    car: carReducer,
    other: otherReducer
  },
});
