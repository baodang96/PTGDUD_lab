import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterApp/Redux/CounterSlice';
import ToDoReducer from './ToDoList/ToDoSlice'
import ThemeReducer from './ToggleTheme/ThemeSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todos: ToDoReducer,
    themes: ThemeReducer,
  },
});
