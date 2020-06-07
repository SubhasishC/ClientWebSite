import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './Info';

const h1 = 'Corporate Office'
const b1 = 'Address1'

function ContactUs() {
    return (
        <div>
            <Row>
                <Col>
                    <Row>
                        <Info heading={h1}
                            body={b1}
                            />
                    </Row>
                    <Row>
                        <Info heading={h1}
                            body={b1}
                            />
                    </Row>        
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}

export default ContactUs