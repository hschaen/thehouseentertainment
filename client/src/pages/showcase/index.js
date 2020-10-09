import React from 'react'
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import About from '../about';
import './style.css'
import img1 from './the-logo-use-blk-no-triangle.png'
let img1name = 'THE - The House Entertainment'

const ShowCase = () => {
    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col>
                        <img srcset = {img1} alt={img1name} width="50%" height="auto" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="white">
                        <h1>Artist Showcase</h1>
                        <p className="white">The House Entertainment wants to give you the opportunity to get your music heard by top industry professionals and the rest of the world. If you are a music artist over 18 years old located in Southern California that creates original music then submit your links to our in-house professionals (sorry, no bands or dj’s).</p>
                        <p className="white">Our team will review your music, select, and announce the winner on Oct. 31st, 2020. The winning artist will receive a professionally produced, recorded, mixed, and mastered 3-5 track EP with multi-platinum producer/engineer, GHST (<a href="https://absentmindedrecords.com">Absent Minded Records</a>). You also will receive professional branding, marketing, and advertising from The House Entertainment (see details below).</p>
                        <p className="white">All music will be professionally publicated and distributed by The House Entertainment, and released on all major digital streaming platforms. All compensation will be split equally with the winner and The House Entertainment.</p>
                        <p className="white">All submissions must be submitted by Oct. 23, 2020.</p>
                        <h3>Winning Artist Receives:</h3>
                        <ul>
                            <li> 3-5 record EP</li>
                            <li>Professionally mixed and mastered at Absent Minded Studio</li>
                            <li>Produced and engineered by GHST 
                                (multi-platinum producer/engineer)</li>
                            <li>Music video for single</li>
                            <li>Distribution &amp; licensing</li>
                            <li>60 days of marketing, promotion and advertisement</li>
                            <li>Music submitted for sync licensing (and radio,tv, &amp; film)</li>
                            <li>Music submitted to radio, music blogs, and distributiom companies.</li>
                            <li>Major feature opportunities available*</li>
                            <li>No recouping fees</li>
                            <li>50/50 split on all music profits</li>
                        </ul>
                        <h3>Rules/Guidelines for Submissions:</h3>
                        <ul>
                            <li>No bands or dj's, please</li>
                            <li>Submit links to 2-4 of your original, mastered songs</li>
                            <li>No freestyles, remixes, covers, etc.</li>
                            <li>You may submit videos or features</li>
                            <li>Also include links to social media, website, and where your music is available online (i.e. Spotify/Apple Music/etc.)</li>
                            <li>Must be at least 18 years old</li>
                            <li>Must live in Southern California</li>
                        </ul>
                        <p className="white small">*: Inquire about major artist features and list of artists available.</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form action="https://thehouseentertainment.us2.list-manage.com/subscribe/post?u=d98f311b016f3c9db7ce70b72&amp;id=3a7da5e978" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate className="white">
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="mce-FNAME">First Name</Label>
                                    <Input type="text" name="FNAME" id="mce-FNAME" placeholder="First Name" />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="mce-LNAME">Last Name</Label>
                                    <Input type="text" name="LNAME" id="mce-LNAME" placeholder="First Name" />
                                </FormGroup>
                                </Col>
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="mce-PKA">Performing As</Label>
                                    <Input type="text" name="PKA" id="mce-PKA" placeholder="Artist name" />
                                </FormGroup>
                                </Col>
                            </Row>
                
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="mce-EMAIL">Email</Label>
                                    <Input type="email" name="EMAIL" id="mce-EMAIL"
                                    placeholder="you@domain.tld"/>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="mce-PHONE">Phone</Label>
                                    <Input type="phone" name="PHONE" id="mce-PHONE"
                                    placeholder="(555)555-1212"/>
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="mce-SOCMEDLINK">Link to Social Media profile</Label>
                                    <Input type="text" name="SOCMEDLINK" id="mce-SOCMEDLINK"
                                    placeholder="instagram.com/profilename"/>
                                </FormGroup>  
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={8}>
                                <FormGroup>
                                    <Label for="mce-SONG1LINK">Link to Song 1</Label>
                                    <Input type="text" name="SONG1LINK" id="mce-SONG1LINK"/>
                                </FormGroup>  
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="mce-SONG1GENRE">Genre</Label>
                                    <Input type="text" name="SONG1GENRE" id="mce-SONG1GENRE"/>
                                </FormGroup>  
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={8}>
                                <FormGroup>
                                    <Label for="mce-SONG2LINK">Link to Song 2</Label>
                                    <Input type="text" name="SONG2LINK" id="mce-SONG2LINK"/>
                                </FormGroup>  
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="mce-SONG3GENRE">Genre</Label>
                                    <Input type="text" name="SONG3GENRE" id="mce-SONG3GENRE"/>
                                </FormGroup>  
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={8}>
                                <FormGroup>
                                    <Label for="mce-SONG3LINK">Link to Song 3</Label>
                                    <Input type="text" name="SONG3LINK" id="mce-SONG3LINK"/>
                                </FormGroup>  
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="mce-SONG3GENRE">Genre</Label>
                                    <Input type="text" name="SONG3GENRE" id="mce-SONG3GENRE"/>
                                </FormGroup>  
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={8}>
                                <FormGroup>
                                    <Label for="mce-SONG4LINK">Link to Song 4</Label>
                                    <Input type="text" name="SONG4LINK" id="mce-SONG4LINK"/>
                                </FormGroup>  
                                </Col>
                                <Col md={4}>
                                <FormGroup>
                                    <Label for="mce-SONG4GENRE">Genre</Label>
                                    <Input type="text" name="SONG4GENRE" id="mce-SONG4GENRE"/>
                                </FormGroup>  
                                </Col>
                            </Row>
                            <FormGroup check>
                                <Input type="checkbox" name="group[67402][1]" id="mce-group[67402]-67402-0"/>
                                <Label for="mce-group[67402]-67402-0" check>I am over 18.</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" name="group[67406][2]" id="mce-group[67406]-67406-0"/>
                                <Label for="mce-group[67406]-67406-0" check>I live in Southern California.</Label>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ShowCase