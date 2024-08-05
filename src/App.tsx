import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button";
import Navbar from './components/navbar/navbar';
import Container from "react-bootstrap/Container";

function App() {

  return (
    <Container fluid >
      <Navbar />
    </Container>
  );
}

export default App;
