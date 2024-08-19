import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from "./store/rootReducer"
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_custom.scss';

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
      <Container fluid className='App' style={{height:"400vh", width:"100vw", fontSize, fontFamily}}>
        <Navbar />
        <LandingPage />
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
          <ul>
            <p> A paragraph element </p>
            <h1> A H1 element </h1>
            <p> A paragraph element </p>
            <h2> A H2 element </h2>
            <p> A paragraph element </p>
            <h3> A H3 element </h3>
            <p> A paragraph element </p>
            <h4> A H4 element </h4>
            <p> A paragraph element </p>
            <h5> A H5 element</h5>
            <p> A paragraph element </p>
            <h6> A H6 element</h6>
            <p> A paragraph element </p>
          </ul>
        </Container>
        <Container fluid>
          <article>
            <p>Here we put some text to test out visual changes when changing the settings.</p>
            <p>Her er noe mer tekst på norsk, vi skal forsøke å implementere oversettelse på et tidspunkt.</p>
          </article>
        </Container>
      </Container>
  );
}

export default App;
