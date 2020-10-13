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
        <>
            <Row className="branding text-center mt-4">
                <Col md={3}>
                    <div className="branding">
                        <img srcset = {img1} alt={img1name} width="100%" height="auto" />
                    </div>
                </Col>
            </Row>
            <Row className="row main-textarea">
                <Col sm={12}>    
                    <Navigation />
                    <SubNavigation />
                </Col>  
            </Row>
        </>
    )
}
export default HomePage