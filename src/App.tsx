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
      <header className="App-header">
        <Navbar />
        <Button variant="primary" onClick={toggleDarkMode}>
          Toggle theme
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
