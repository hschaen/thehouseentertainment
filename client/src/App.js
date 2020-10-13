import React from 'react';
import Lander from './pages/lander/'
import Home from './pages/home/'
import ShowCase from './pages/showcase/'
import Video from './pages/video/'
import Content from './pages/content/'
import NavigationH from './components/NavigationH'
import Footer from './components/Footer'
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Container>
            <Row className="d-md-none navRow">
                <Col md={12}>
                    <NavigationH />
                </Col>
            </Row>
        <Switch>
          <Route path="/showcase" render={ShowCase} />
          <Route path="/home" render={Home} />
          <Route path="/videos" render={Video} />
          <Route path="/content" render={Content} />
          <Route path="/" render={Home} />
        </Switch>
      </Container>
        <Footer/>
    </Router>
  );
}

export default App;