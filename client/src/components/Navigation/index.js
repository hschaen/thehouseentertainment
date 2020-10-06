import React, {useState, useEffect} from 'react'
import {Nav, NavItem, NavLink } from 'reactstrap';
import './style.css'
const links = [
    {"name":"Services",
    "link":"#"},
    {"name":"Content",
    "link":"#"},
    {"name":"Clients",
    "link":"#"}
]

const NavigationDay = () => {
    const [isLink, setIsLink] = useState(true)
    const toggle = () => setIsLink(!isLink)
    // const onLink = () => setIsLink(false)
    // const offLink = () => setIsLin k(true)
    useEffect(() => {
        switcher()                         
    },(isLink))
    let switcher = (key,e) => {
        // user clicks on item
        let x = document.getElementById(`navLink${key}`)
        if(isLink) {
            setIsLink(false)
            console.log(isLink)
            
            // item is visible, then `1
            // set the state to false
            // hide items that don't match id of clicked target
   
            switch(key) {
                //if the item is #0 in list
                case `0`:
                    console.log("excellent")
                    //then make visible
                    x.classList.remove("hiddenNavLink")
                    x.classList.addClass("shownNavLink")
                    //remove items 1 and 2 
                    // if(key) {
                        //if key isn't 0 then you're on the next page
                    //    if(key === '1' || key === '2') {
                    //         x.classList.remove("shownNavLink")
                    //         x.classList.addClass("hiddenNavLink")
                    //    }
                break;
                default:
                    console.log("idk")
            }
                    
        }                                                                                 
        
    }    
        
        // if(!isLink) {
        //     console.log(isLink)
        //     setIsLink(true)

        //     x.classList.remove("hiddenNavLink")
        //     x.classList.add("shownNavLink")

        // }
    return(
        <>
            <ul className="navigation">
                {links.map(link => {
                    return (
                        <li className="nav-links">

                            <a href={link.link} className="nav-links">{link.name}</a>
                        </li>
                    )
                    
                })}
            </ul>
        </>
    );
} 
export default NavigationDay