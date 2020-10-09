import React, {useState, useEffect} from 'react'
import {Nav, NavItem, NavLink } from 'reactstrap';
import links from '../Content/links.json'
import './style.css'
import anime from 'animejs/lib/anime.es.js';

const NavigationList = () => {
    const b = (c) => {
        const a = document.getElementById(`navItem${c}`)
        if(c === 0) {
            
            console.log("first up", a )
        }
    }
    return(
        <>
            <ul className="nav-content">
                {links.map((link,key) => 
                    <li id={`navItem${key}`} className="nav-link" key={key}>
                        <a href={link.link} onClick={b(key)}>{link.name}</a>
                    </li>
                )}
            </ul>
        </>
    );

} 
export default NavigationList