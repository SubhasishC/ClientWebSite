import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
 
const navBarStyle = {
    width: 'auto',
    textAlign: 'end',
    padding: '60px',
    background: 'aliceblue'
}

const navLinkStyle = {
    textAlign: 'end',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    color: 'blue',
    font: '600px',
    margin: '15px',
    marginBottom: '15px',
    padding: '8px 10px',
    borderRadius: '6px',
    display: 'inline'
}
const navDropDownStyle = {
    textAlign: 'end',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    color: 'blue',
    font: '600px',
    margin: '15px',
    marginBottom: '15px',
    padding: '8px 10px',
    borderRadius: '6px',
    display: 'inline',
    position: 'relative'
}
function Navigation () {

    return (
        <nav style={navBarStyle}>
         
                    <Nav.Link style={navLinkStyle} href="home">HomePage</Nav.Link>
                    <Nav.Link style={navLinkStyle} href="aboutus">AboutUs </Nav.Link>
                    <NavDropdown style={navDropDownStyle} title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
        
        </nav>
    )

}

export default Navigation