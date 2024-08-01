import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button";
import Navbar from './components/navbar/navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`d-flex flex-column justify-content-center align-items-center ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`} >
      <Navbar />
      <Button variant="primary" onClick={toggleDarkMode}>
          Toggle theme
      </Button>
    </div>
  );
}

export default App;
