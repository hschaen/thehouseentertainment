import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Header from '../../components/header';
import Main from '../../components/main';
const About = () => {
    return (
        <>
            <Col>
                <Header>The House Entertainment</Header>
                <Main className="center">
                    <p className={"white"}>The House Entertainmnet is an entertainment services 
                    <br/>and content creation company based out of San Diego, CA.</p>
                    <p className={"gray"}>For more information contact: <a href="mailto:hello@thehouseentertainment.com">hello@thehouseentertainment.com</a></p>
                </Main>
            </Col>
        </>
    )
}
export default About