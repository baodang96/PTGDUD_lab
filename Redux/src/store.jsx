import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterApp/Redux/CounterSlice';
import ToDoReducer from './ToDoList/ToDoSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: ToDoReducer,
  },
});
