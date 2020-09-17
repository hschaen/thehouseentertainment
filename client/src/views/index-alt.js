import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Nav from '../components/Navbars/IndexNavbar';
import Studio from './studio';
import Music from './music';
import Video from './video';
import Home from './home';
import '../assets/css/index.css'
let navLinks = [
    {Name: "Home",Link: "/"},
    {Name: "Studio", Link: "/studio"},
    {Name: "Music", Link: "/music"},
    {Name: "Video", Link: "/video"},
    {Name: "Merch", Link: ""},
    {Name: "Artists", Link: ""},
    {Name: "About", Link: ""}
]
const Index = () => {
    return (
        <Router>
            <div className="main-container">
                <Nav links={navLinks}/>
                <Switch>
                    <Route path="/studio" render={() => <Studio />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/video" render={() => <Video />} />
                    <Route path="*" render={() => <Home links={navLinks} />} />
                </Switch>
                <footer>
                    <p>&copy; The House Entertainment 2020. Site built by <a href="https://www.thehouseentertainment.com" alt="The House Entertainment"><strong>The House Ent.</strong></a>.</p>
                </footer>
            </div>
        </Router>
    )
}
export default Index