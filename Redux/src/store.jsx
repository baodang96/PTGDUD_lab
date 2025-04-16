import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterApp/Redux/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
