
import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import {
    Button,
    Navbar,
    Nav,
    Tab,
    NavDropdown,
    Dropdown,
    DropdownButton,
    FormControl
  } from 'react-bootstrap';
import StudentDetails from './StudentDetails';
import StudentCourse from './StudentCourses'

const style = {
    overall : {
        margin : '40px'
    }
}  
export default function Student(props) {

    return (
        <div>
                <Row style={style.overall}>
                    <Col sm={7}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3} />
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Student Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Course</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <StudentDetails />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <StudentCourse />
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                  </Tab.Container>
                </Col>
            </Row>  
                
        </div>
    )

}