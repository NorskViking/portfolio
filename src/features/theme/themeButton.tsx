import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { toggleTheme } from './themeSlice';
import '../../css/custom.css'; // Import the compiled CSS
import 'bootstrap-icons/font/bootstrap-icons.css';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', mode);
  }, [mode]);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <button className="btn btn-outline-primary" onClick={handleToggle}>
        {mode === 'light' ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
      </button>
    </div>
  );
};

export default ThemeToggle;
