import React, {Component, useState} from 'react';


import { Button } from 'reactstrap';

import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

  const NavMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="nav_header">
            <Nav className="justify-content-center align-items-center">
                <NavItem>
                    <NavLink className="text-white active" href="#">Products</NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink className="text-white" href="#">Perspective</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#">Services</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#">Culture</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#">Co-operation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="http://localhost:3000/initiaves_page">Initiaves</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="text-white" href="#">Information</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navachar_logo" href="#">
                        <img src="images/navachar_logo.png" alt="navachar logo"/>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    );

}
export default  NavMenu;