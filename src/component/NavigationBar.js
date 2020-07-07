import React from 'react'
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton,
  FormControl
} from 'react-bootstrap'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import { Row, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'react-bootstrap/Image'

const navBarStyle = {
  backgroundColor: "#007bff",
  padding: "20px"
}

const navBarStyle2 = {
  backgroundColor: "#fcba03",
  padding: "20px"
}

const navLinkStyle = {
  color: "black",
  fontSize : '35px'
 }
const navIconStyle = {
  // padding: '5px 5px 5px 5px'
}
const style ={
  color: 'black'
}
function Navigation () {
  return (
    <div style={navBarStyle}>
    <Container fluid>
      <Row>
          <Col xs={1}>
          </Col>
          <Col xs={2}>
            <img src="images/circle-cropped.png" alt="Lucent Academy" width="80" height="80" style={navIconStyle}/> 
          </Col>
          <Col xs={9}>
          <Navbar bg='primary' variant='dark' expand='lg' className="mr-sm-2">  
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='home'>
                  <span style={navLinkStyle}>Home</span>
                </Nav.Link>
                <Nav.Link href='aboutus'>
                <span style={navLinkStyle}>About US</span>
                </Nav.Link>
                <NavDropdown title={<span style={navLinkStyle}>Download</span>} id='basic-nav-dropdown'>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle}>DOWNLOAD1</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                  <span style={navLinkStyle}>DOWNLOAD2</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                  <span style={navLinkStyle}>DOWNLOAD3</span>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span style={navLinkStyle}>Program</span>} id='basic-nav-dropdown'>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle}>UPSC</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='apsc'>
                    <span style={navLinkStyle}>APSC</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle}>Banking</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle}>RBI</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='media'>Videos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span style={navLinkStyle}>Enquiries</span>} id='basic-nav-dropdown'>
                  <NavDropdown.Item href='register'>
                    <span style={navLinkStyle}>Registration</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle}>Fee Structure</span>  
                  </NavDropdown.Item>
                  <NavDropdown.Item href='faq'>
                    <span style={navLinkStyle}>FAQ</span> 
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span style={navLinkStyle}>Login</span>} id='basic-nav-dropdown'>
                  <NavDropdown.Item href='signIn'>
                    <span style={navLinkStyle}>Login as Student</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='signInAsAdmin'>
                    <span style={navLinkStyle}>Login as Administrator</span>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='contactus'><span style={navLinkStyle}>Contanct Us</span> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Navigation
