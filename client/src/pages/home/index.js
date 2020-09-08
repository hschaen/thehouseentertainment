import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './style.css'
import img1 from './the-logo-use-blk-no-triangle.png'
let img1name = 'THE - The House Entertainment'
let list = [
    {name:"home", link: "#"},
    {name:"about", link: "#"},
    {name:"events", link: "#"},
    {name:"music", link: "#"},
    {name:"videos", link: "#"},
    {name:"artists", link: "#"},
    {name:"contact", link: "#"},
    {name:"careers", link: "#"}

]
const HomePage = () => {
    return (
        <>
            <Container>
                <Row className={"fullHeight"}>
                    <Col>
                    
                        <img srcset = {img1} alt={img1name} width="100%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <header className="theText">
                            <h1 className="white">
                                The House Entertainment
                            </h1>
                        </header>
                        <main className="center">
                            <p className={"white"}>The House Entertainmnet is an entertainment services 
                            <br/>and content creation company based out of San Diego, CA.</p>
                            <p className={"gray"}>For more information contact: <a href="mailto:hello@thehouseentertainment.com">hello@thehouseentertainment.com</a></p>
                        </main>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <footer>
                            <p className="small white footerText">
        The House Entertainment &copy;2020 
        <ul className="footerLinks">
            {list.map(item => { 
            return (
                <li className="footerLink"><a href={item.link}>{item.name}</a></li>
            )
            })}
                                </ul>
                            </p>
                        </footer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomePage