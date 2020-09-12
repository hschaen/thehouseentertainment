import React from 'react';
import Lander from './pages/lander/'
import Home from './pages/home/'
import Footer from './components/footer'
import './App.css';
import {Container} from 'reactstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/" component={Lander} />
        </Switch>
        <Footer/>
      </Container>
      
    </Router>
  );
}

export default App;
