import React, {useState} from 'react'
import '../assets/css/index.css'
import image from '../assets/img/absent-minded-records-logo-white.png'
import ReactPlayer from 'react-player'
import video from './video.json'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

const Video = () => {
    const [thisVideo, setThisVideo] = useState("https://www.youtube.com/watch?v=Qum1IWLVS2Q");
    return (
        <>
            <a name="video"></a><ReactPlayer wrapper="div.video-container" playing="false" volume="0.5" url={thisVideo} />
            <header className="main-text">
                <div className="image-container">
                    <img src={image} width="25%" height="auto" alt="Absent Minded Logo"/>
                </div>
                <h1 className="white">The House Entertainment Videos</h1>
            </header>
            <main>
                <Container className="flex-container">
                    <Row className="content-area">
                        <Col sm={12}>
                            <ListGroup>
                                {video.map((item,index) => {
                                    return (
                                        <ListGroupItem>
                                            <div className="item-image"><a href="#video" onClick={() => setThisVideo(`https://www.youtube.com/watch?v=${item.youtube}`)}><img src={`https://i.ytimg.com/vi/${item.youtube}/hqdefault.jpg`} width="246" height="auto" /></a></div>
                                            <div className="item-text">{item.title}</div>
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="content-area">
                        <p>All videos made and produced by Johnny Ashcraft of <a className="strong" href="https://www.timesweststudios.com">Times West Studios</a></p>
                    </Row>
                </Container>
            </main>
        </>
    );
}
export default Video;