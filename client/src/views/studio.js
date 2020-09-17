import React from 'react'
import '../assets/css/index.css'
import image from '../assets/img/absent-minded-records-logo-white.png'
import ReactPlayer from 'react-player'

const Index = () => {
    return (
        <>
            {/*<Nav links={navLinks}/>*/}
            <ReactPlayer wrapper="div.video-container" playing="false" volume="0.5" url='https://youtu.be/RT1efg-iiwg' />

            <header className="main-text">
                <div className="image-container">
                    <img src={image} width="25%" height="auto" alt="Absent Minded Logo"/>
                </div>
                <h1 className="white">Absent Minded Studio</h1>
            </header>
            <main>
                <div className="flex-container">
                    <div className="content-area">
                
                        <p>Absent Minded recording studio is located in the brand new, award winning Rancho Mission Viejo community in Orange County, CA in a beautiful 3 story 3000 sq ft home.</p>
                        <p>For booking rates and availability send us an email:</p>
                        <p><a className=" btn btn-sm secondary" href="mailto:absentmindedrecordssd@gmail.com?subject=Booking Inquiry">Send Message</a></p>
                        <p><a className="small strong" href="mailto:absentmindedrecordssd@gmail.com?subject=Booking Inquiry">absentmindedrecordssd@gmail.com</a>.</p>
                        <h3>Studio Gear:</h3>
                        <ul>
                            <li>Fully sound treated acoustic paneled studio</li>
                            <li>Lounge area</li>
                            <li>52" TV monitor</li>
                            <li>2 Genelic 8040 mb</li>
                            <li>Avalon pre-amp / compressor</li>
                            <li>2 Apollo Twin quad-core interface</li>
                            <li>UAD-2 satellite 8-core</li>
                            <li>Native Instrument Maschine mk2 MPC (full-size)</li>
                            <li>Neumann u87 microphone</li>
                            <li>Aston Origin custom black microphone</li> 
                            <li>Sterling pf1 professional pop filter</li>
                            <li>Sterling vms (voice microphone shield)</li>
                            <li>Wire solutions 4 channel headphone amp</li>
                            <li>2 pairs of Beyer dynamic dt770 headphones</li>
                            <li>2 pairs of ATH-m50x Audio Technica headphones</li> 
                            <li>2 pairs of Beats Solo 3 headphones</li>
                            <li>Nektar Panorama p4 midi controller</li>
                            <li>Williams 88-key weighted piano with midi input</li>
                            <li>Fender squire telecaster guitar</li>
                            <li>Ltd 5 string bass guitar</li>
                            <li>Yamaha acoustic guitar</li>
                            <li>Takamine Jasmine acoustic guitar</li>
                        </ul>
                        <h3>Plug-ins:</h3>
                        <ul>
                            <li>Waves</li>
                            <li>UAD</li>
                            <li>Fab filter</li>
                            <li>Izotope</li>
                            <li>All well known popular vst's</li>
                            <li>And more...</li>
                        </ul>
                    </div>
                </div>    
            </main>
        </>
    )
}
export default Index