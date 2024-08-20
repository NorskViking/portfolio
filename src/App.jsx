import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from "./store/rootReducer"
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';

import Navbar from './components/navbar/navbar';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  const isDarkMode = useSelector((state: Rootstate) => state.theme.isDarkMode);
  const fontSize = useSelector((state: Rootstate) => state.fontSize.fontSize);
  const fontFamily = useSelector((state: Rootstate) => state.fontFamily.fontFamily);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.setAttribute("data-bs-theme", "dark");
    } else {
      rootElement.setAttribute("data-bs-theme", "light");
    }
  }, [isDarkMode])

  return (
      <Container fluid className='App' style={{padding: "0", margin: "0", fontSize, fontFamily}}>
        <Navbar />
        <LandingPage />
      </Container>
  );
}

export default App;
