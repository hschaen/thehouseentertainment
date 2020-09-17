import React from 'react'
import '../assets/css/index.css'
import image from '../assets/img/absent-minded-records-logo-white.png'
import ReactPlayer from 'react-player'
import music from './music.json'
import spotifyImg from '../assets/img/spotify.svg'
import appleImg from '../assets/img/apple.svg'
import youtubeImg from '../assets/img/youtube.svg'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

const Music = () => {
    return (
        <>
            <header className="main-text">
                <div className="image-container">
                    <img src={image} width="25%" height="auto" alt="Absent Minded Logo"/>
                </div>
                <h1 className="white">The House Entertainment</h1>
            </header>
            <main>
                <Container className="flex-container">
                    <Row className="content-area">
                        <Col sm={12}>
                            <ListGroup>
                                {music.map((item,index) => {
                                    return (
                                        <ListGroupItem>
                                            <div className="item-text">{item.title}</div>
                                            <div className="item-image"><a href={`https://www.youtube.com/watch?v=${item.youtube}`} target="_blank"><img src={`https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`} width="246" height="auto" /></a></div>
                                            <div className="item-links">
                                                <div className="item-spotify"><a href={item.spotify} className="btn btn-sm secondary" target="_blank">Spotify</a></div>
                                                <div className="item-apple"><a href={item.apple} className="btn btn-sm secondary" target="_blank">Apple Music</a></div>
                                                <div className="item-youtube"><a href={`https://www.youtube.com/watch?v=${item.youtube}`} className="btn btn-sm secondary" target="_blank">YouTube</a></div>
                                            </div>
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
export default Music;