import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
import './style.css'
import img1 from './the-logo-use-blk-no-triangle.png'
import { Link } from 'react-router-dom';
let img1name = 'THE - The House Entertainment'
const HomePage = () => {
    return (
        <>
            <Row className={"fullHeight"}>
                <Col>
                    <img srcset = {img1} alt={img1name} width="100%" height="auto" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-5">
                    <Link to="/home">
                        <Button color="secondary">
                            Continue
                        </Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}
export default HomePage