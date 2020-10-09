import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import './style.css'
import links from '../Content/links.json'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="tertiary">
        <NavbarBrand href="/">The House Entertainment</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {links.map((link, key) => {
              return ( 
                <NavItem key={key}>
                  <NavLink href={link.link}>{link.name}</NavLink>
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;