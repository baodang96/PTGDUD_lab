import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './ThemeSlice';

const TodoApp = () => {
  const themes = useSelector((state) => state.themes);
  const dispatch = useDispatch();

  return (
      <>
        <div className='theme' style={{background: themes ? "white" : "black", color: themes ? "black" : "white"}}>
            <h1>Toggle Theme Demo</h1>
            <button onClick={() => dispatch(toggleTheme())}>
              Toggle theme
            </button>
        </div>
      </>
  );
};

export default TodoApp;
