import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './style.css'
import img1 from './the-logo-use-blk-no-triangle.png'
let img1name = 'THE - The House Entertainment'
const HomePage = () => {
    return (
        <>
        <Container>
            <Col>
                <Row>
                    <img src = {img1} height="auto" width="100%" alt={img1name} />
                </Row>
                <Row>
                    <header className="theText">
                        <h1 className="white">
                            The House Entertainment
                        </h1>
                    </header>
                </Row>
                <Row>
                    <footer>
                        <p className="white footerText">
                            The House Entertainment &copy;2020
                        </p>
            
                    </footer>
                </Row>
            </Col>
        </Container>
        </>
    )
}
export default HomePage