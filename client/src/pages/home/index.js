import React from 'react'
import {Container, Row, Col, Button, Nav, NavItem, NavLink } from 'reactstrap'
import Navigation from '../../components/Navigation'
import NavigationH from '../../components/NavigationH'
import SubNavigation from '../../components/SubNavigation'
import About from '../about';
import './style.css'
import img1 from './the-house-entertainment-logo-trans.png'
let img1name = 'THE - The House Entertainment'

const HomePage = () => {
    return (
        <div id="page-container">
            <Container>
                <Row className="d-md-none navRow">
                    <Col md={12}>
                        <NavigationH />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="branding">
                <Row className="text-center mt-4">
                    <Col md={3}>
                        <div className="branding">
                            <img srcset = {img1} alt={img1name} width="100%" height="auto" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="desktop-nav">
                <main className="row main-textarea">
                    <Col>    
                        <Navigation />
                        <SubNavigation />
                    </Col>  
                </main>
                {/*<Row>
                    <Col md={12} className="">
                        <div className="homeBox">
                            <h2 className="white">Artist Showcase</h2>
                            <p className="white">Join The House Entertainment Artist Showcase for a chance to work with multi-platinum producer/engineer, GHST (<a href="https://www.absentmindedrecords.com" alt="Absent Minded Records">Absent Minded Records</a>).</p><p><a href="/showcase" className="btn btn-lg btn-primary" alt="The House Entertainment Artist Showcase">Get Started.</a></p>
                        </div>
                    </Col>
                </Row>*/}
                {/* <Row>
                    <About/>                    
                </Row>*/}
            </Container>
        </div>
    )
}
export default HomePage