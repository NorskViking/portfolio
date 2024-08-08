import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from "./store/rootReducer"
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SettingsModal from './components/modal/SettingsModal';

import Navbar from './components/navbar/navbar';
import Container from "react-bootstrap/Container";


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
      <Container fluid className='App' style={{height:"400vh", width:"100vw", fontSize, fontFamily}}>
        <Navbar />
        <SettingsModal />
        <div>
          <p> This is some text for testing changes of size and font </p>
        </div>
        <Container fluid >
          <ul>
            <p style={{fontFamily:"Open Sans"}}>Open Sans</p>
            <p style={{fontFamily:"Concert One"}}>Concert One</p>
            <p style={{fontFamily:"Comfortaa"}}>Comfortaa</p>
            <p style={{fontFamily:"Roboto"}}>Roboto</p>
            <p style={{fontFamily:"Work Sans"}}>Work Sans</p>
            <p style={{fontFamily:"Quicksand"}}>Quicksand</p>
            <p style={{fontFamily:"Oxygen"}}>Oxygen</p>
            <p style={{fontFamily:"Merriweather Sans"}}>Merriweather Sans</p>
            <p style={{fontFamily:"Kosugi"}}>Kosugi</p>
            <p style={{fontFamily:"Kosugi Maru"}}>Kosugi Maru</p>
            <p style={{fontFamily:"Alef"}}>Alef</p>
            <p style={{fontFamily:"Barlow Semi Condensed"}}>Barlow Semi Condensed</p>
          </ul>
        </Container>
      </Container>
  );
}

export default App;
