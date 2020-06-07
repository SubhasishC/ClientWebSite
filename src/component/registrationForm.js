import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function Registration() {
    return (

        <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Full Name" />
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
    )
}

export default Registration