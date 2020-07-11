import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'



export default function StudentDetails() {

    return (
        <div>
            <Col md={{ span: 10, offset: 10 }}>
            <Row>
                <h3>Name  ::  </h3>
                <h4> Subhasish</h4>
            </Row>
            <Row>
                <h3>Email  ::  </h3>
                <h4> Subhasish@gmail.com</h4>
            </Row>
            <Row>
                <h3>Courses  ::  </h3>
                <h4> Subhasish</h4>
            </Row>
            <Row>
                <h3>MemberShip Till  ::  </h3>
                <h4> 01-12-2020</h4>
            </Row>
            </Col>
        </div>
    )
}