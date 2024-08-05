import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage';

import { useSelector } from 'react-redux';

import Button from "react-bootstrap/Button";
import Navbar from './components/navbar/navbar';
import Container from "react-bootstrap/Container";

import modeButton from './components/modeButton/modeButton';

function App() {

  const { darkMode } = useSelector((state) => state.mode);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Container className='App' fluid data-theme={theme}>
      <Navbar data-theme={theme}/>
      <modeButton />
    </Container>
  );
}

export default App;
