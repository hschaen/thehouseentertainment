import React from 'react'
import {Container, Row, Col, Button, Nav, NavItem, NavLink, ListGroup, ListGroupItem } from 'reactstrap'
import music from '../music/music.json'
import './style.css'
import img1 from '../home/the-house-entertainment-logo-trans.png'
let img1name = 'THE - The House Entertainment'
const Content = () => {
    return (
        <div className="content-area">

            <Row className="branding text-center mt-4">
                <Col md={3}>
                    <div className="branding">
                        <img srcset = {img1} alt={img1name} width="100%" height="auto" />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2 className="tertiary">Music</h2>
                </Col>
            </Row>

            <Row>
            <Col sm={12}>
                            <ListGroup>
                                {music.map((item,index) => {
                                    return (
                                        <ListGroupItem>
                                            <div className="item-text primary">{item.title}</div>
                                            <div className="item-image"><a href={`https://www.youtube.com/watch?v=${item.youtube}rel=0&modestbranding=1&autoplay=1&autohide=1&showinfo=0&controls=0`} target="_blank"><img src={`https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`} width="246" height="auto" /></a></div>
                                            <div className="item-links">
                                                <div className="item-spotify"><a href={item.spotify} className="btn btn-sm btnColor1 color2" target="_blank">Spotify</a></div>
                                                <div className="item-apple"><a href={item.apple} className="btn btn-sm btnColor1 color2" target="_blank">Apple Music</a></div>
                                                <div className="item-youtube"><a href={`https://www.youtube.com/watch?v=${item.youtube}`} className="btn btn-sm btnColor1 color2" target="_blank">YouTube</a></div>
                                            </div>
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                        </Col>
            </Row>
            
            <Row>
                <Col>
                    <h2 className="tertiary">Video</h2>
                </Col>
            </Row>

            
            {/* Music */}
            {/* Film */}
            {/* Services/Evntw */}
        </div>
    )
}
export default Content