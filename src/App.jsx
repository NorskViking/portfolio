import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './app/store';

import ThemeToggle from './features/theme/themeButton';
import FontSizeToggle from './features/fontSize/fontSizeButton';

import Button from "react-bootstrap/Button";
import Navbar from './components/navbar/navbar';
import Container from "react-bootstrap/Container";


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Container fluid className='App' style={{height:"400vh", width:"100vw"}}>
        <Navbar />
        <ThemeToggle />
        <FontSizeToggle />
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
    </Provider>
  );
}

export default App;
