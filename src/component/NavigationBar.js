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
  padding: "18px"
}

const dropdownbg = {
  backgroundColor: "#007bff",
}
const navBarStyle2 = {
  backgroundColor: "#fcba03",
  padding: "20px"
}

const navLinkStyle = {
  color: "white",
  fontSize : '18px',
  fontFamily: 'Helvetica'
 }

 const navLinkStyle2 = {
  color: "black",
  fontSize : '14px',
  fontFamily: 'Helvetica'
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
          <Col xs={3}>
          </Col>
          <Col xs={6}>
          <Navbar bg='primary' variant='dark' expand='lg' className="mr-sm-2">  
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='home'>
                  <span style={navLinkStyle}>Home</span>
                </Nav.Link>
                <Nav.Link href='aboutus'>
                  <span style={navLinkStyle}>About us</span>
                </Nav.Link>
                <NavDropdown title={<span style={navLinkStyle}>Courses</span>} id='basic-nav-dropdown' style={dropdownbg}>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle2}>UPSC</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='apsc'>
                    <span style={navLinkStyle2}>APSC</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle2}>Banking</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle2}>RBI</span>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='photogallery'>
                  <span style={navLinkStyle}>Gallery</span>
                </Nav.Link>
                <NavDropdown title={<span style={navLinkStyle}>Download</span>} id='basic-nav-dropdown'>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle2}>Syllabus</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                  <span style={navLinkStyle2}>Previuos Year Question Paper</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                  <span style={navLinkStyle2}>Monthly Magazine </span>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span style={navLinkStyle}>Enquiries</span>} id='basic-nav-dropdown'>
                  <NavDropdown.Item href='register'>
                    <span style={navLinkStyle2}>Registration</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    <span style={navLinkStyle2}>Fee Structure</span>  
                  </NavDropdown.Item>
                  <NavDropdown.Item href='faq'>
                    <span style={navLinkStyle2}>FAQ</span> 
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
