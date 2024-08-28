import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.scss";

//import './styles/_custom.scss';
import { Rootstate } from "./store/rootReducer"
import { useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";

import NavbarComponent from './components/navbar/NavbarComponent';
import LandingPage from './pages/LandingPage';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import ProjectSection from './pages/ProjectSection';

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
        <NavbarComponent />
        <LandingPage />
        <ProjectSection />
        <About />
        <Projects />
      </Container>
  );
}

export default App;
