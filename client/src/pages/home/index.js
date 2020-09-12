import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import About from '../about';
import './style.css'
import img1 from './the-logo-use-blk-no-triangle.png'
let img1name = 'THE - The House Entertainment'

const HomePage = () => {
    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col>
                        <img srcset = {img1} alt={img1name} width="50%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <About/>                    
                </Row>
            </Container>
        </>
    )
}
export default HomePage