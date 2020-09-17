import React from 'react'
import ReactPlayer from 'react-player'
import image from '../assets/img/absent-minded-records-logo-white.png'
const Home = (props) => {
    return (
        <>
            <ReactPlayer wrapper="div.video-container" playing="false" volume="0.5" url='https://www.youtube.com/watch?v=Qum1IWLVS2Q' />
            <header className="main-text">
                <div className="image-container">
                    <img src={image} width="25%" height="auto" alt="Absent Minded Logo"/>
                </div>
                <h1 className="white">Absent Minded Records</h1>
            </header>
            <main>
                <div className="container flex-container">
                    <ul className="white center-this">
                        {props.links.map(item => {
                            return <li className="item"><a href={item.Link} className="btn btn-lg secondary">{item.Name}</a></li>
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}
export default Home