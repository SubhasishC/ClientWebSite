import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Col } from 'mdbreact';

const style = {
    h1 : {
        backgroundColor: 'lightblue',
        textAlign: 'center',
        padding: '20px 10px 10px 30px'
    },
    h2: {
        textAlign: 'center',
        padding: '20px 20px 50px 20px'
    },
    container: {
        padding: '70px 50px 100px 100px',
       // border: 'solid',
    }
}


function Registration() {
    return (
        <Container style={style.container}>
            <div>
                <h1 style={style.h1}>REGISTRATION FORM</h1>
                <h5 style={style.h2}>All fields are mandatory</h5>
            </div>
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="phone" placeholder="Phone Number" />
                </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Courses</Form.Label>
                <Form.Control as="select">
                <option>IAS</option>
                <option>APSC</option>
                <option>Banking</option>
                <option>SSC</option>
                <option>Others</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Container>
    )
}

export default Registration