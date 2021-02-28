import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Uploader from './pages/Uploader'
import Visor from './pages/Visor'
import NavBar from './pages/NavBar';
import { Container } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Container>
      <NavBar />
      <Uploader />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <Visor />

    </Container>
  );
}

export default App;
