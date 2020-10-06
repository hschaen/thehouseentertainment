import React from 'react';
import Lander from './pages/lander/'
import Home from './pages/home/'
import ShowCase from './pages/showcase/'
import Footer from './components/Footer'
import './App.css';
import {Container} from 'reactstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/showcase" render={ShowCase} />
          
          <Route path="/home" render={Home} />
          
          <Route path="/" render={Home} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;