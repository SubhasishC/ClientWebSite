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
    <div style={navBarStyle}>
    <Container fluid>
      <Row>
          <Col xs lg="1">
            <img src="images/circle-cropped.png" alt="Lucent Academy" width="80" height="80" /> 
          </Col>
          <Col>
          <Navbar bg='primary' variant='dark' expand='lg'>
            <Navbar.Brand href='home'>Lucent Academy</Navbar.Brand>
          </Navbar>
          </Col>
          <Col>
          <Navbar bg='primary' variant='dark' expand='lg'>  
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='home'>HomePage</Nav.Link>
                <Nav.Link href='aboutus'>AboutUs</Nav.Link>
                <NavDropdown title='Downloads' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    Download1
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    Download2
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    Download3
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Program' id='basic-nav-dropdown'>
                  <DropdownButton
                    key='right'
                    id={`dropdown-button-drop-1`}
                    drop='right'
                    variant='secondary'
                    title={` APSC/UPSC `}
                  >
                    <Dropdown.Item eventKey='1'>CA</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Question Paper</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>Syllabus</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    key='right'
                    id={`dropdown-button-drop-1`}
                    drop='right'
                    variant='secondary'
                    title={` Banking  `}
                  >
                    <Dropdown.Item eventKey='1'>CA</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Question Paper</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>Syllabus</Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    key='right'
                    id={`dropdown-button-drop-1`}
                    drop='right'
                    variant='secondary'
                    title={` RBI `}
                  >
                    <Dropdown.Item eventKey='1'>CA</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>Question Paper</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>Syllabus</Dropdown.Item>
                  </DropdownButton>
                  <NavDropdown.Item href='media'>Videos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Enquiries' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='register'>
                    Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item href='download_resources/doc1.pdf'>
                    Fee Structure
                  </NavDropdown.Item>
                  <NavDropdown.Item href='faq'>FAQ</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='contactus'>Contact Us</Nav.Link>
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
