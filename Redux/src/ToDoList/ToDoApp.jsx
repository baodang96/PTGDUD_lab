import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './ToDoSlice';

const TodoApp = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <h2>📝 Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Thêm việc cần làm..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{listStyleType: "none"}}>
        {todos.map((todo, index) => (
          <li key={todo.id} style={{ margin: '8px 0' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {index+1}: {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: 10 }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
