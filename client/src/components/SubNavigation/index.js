import React from 'react'
import links from '../../components/Content/nav-content.json'
import './style.css'
const SubNavigation = () => {
    return (
        <ul className="nav-content">
            {links.map((link,key) => {
                return (
                    <li key={key} className="nav-link hiddenNavLink">
                        <a href={link.link}>{link.name}</a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SubNavigation