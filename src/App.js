import React from 'react';
import './App.css';
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
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Uploader />
            </Route>
            <Route path="/visor">
              <Visor />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
