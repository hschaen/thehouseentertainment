import React from 'react';
let list = [
    {name:"home", link: "#"},
    {name:"about", link: "#"},
    {name:"events", link: "#"},
    {name:"music", link: "#"},
    {name:"videos", link: "#"},
    {name:"artists", link: "#"},
    {name:"contact", link: "#"},
    {name:"careers", link: "#"}

]
const Footer = () => {
    return (
        <>
            <footer>
                <p className="small white footerText">
                    The House Entertainment &copy;2020 
                    <ul className="footerLinks">
                        {list.map(item => { 
                        return (
                            <li className="footerLink"><a href={item.link}>{item.name}</a></li>
                        )
                        })}
                    </ul>
                </p>
            </footer>
        </>
    )
}
export default Footer