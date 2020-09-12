import React from 'react';
const Header = (props) => {
    return (
        <header className="theText">
            <h1 className="white">
                {props.children}
            </h1>
        </header>
    )
}
export default Header