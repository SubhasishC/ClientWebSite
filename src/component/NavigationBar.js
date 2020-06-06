import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import { Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

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
        <nav>
                    <Row >
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="home">Lucent Academy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="home">HomePage</Nav.Link>
                            <Nav.Link href="aboutus">AboutUs</Nav.Link>
                            <NavDropdown title="Downloads" id="basic-nav-dropdown">
                                <NavDropdown.Item href="download_resources/doc1.pdf">Download1</NavDropdown.Item>
                                <NavDropdown.Item href="download_resources/doc1.pdf">Download2</NavDropdown.Item>
                                <NavDropdown.Item href="download_resources/doc1.pdf">Download3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Downloads" id="basic-nav-dropdown">
                                <NavDropdown.Item href="download_resources/doc1.pdf">Download1</NavDropdown.Item>
                                <NavDropdown.Item href="download_resources/doc1.pdf">Download2</NavDropdown.Item>
                                <NavDropdown.Item href="download_resources/doc1.pdf">Download3</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            
                        </Navbar.Collapse>
                        </Navbar>
                    </Row>
        </nav>
    )

}

export default Navigation