import React from 'react'
import links from '../../components/Content/nav-content.json'
import './style.css'
const hideSubNavLink = (key) => {
    for(let i = 0; i < links.length; ++i) {
        let x = document.querySelector(`#subNavLink${i}`)
        console.log(x)
    } 
}
const SubNavigation = () => {
    const handleClick = (e,key) => {
        e.preventDefault();
        console.log(key)
    }
    return (
        <ul className="subNavContent hiddenNavLink">
            {links.map((link, key) => {
                return (
                    <li key={key} className="nav-link" id={`subNavLink${key}`}>
                        <a href={link.link} onClick={() => handleClick(key) }>{link.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SubNavigation