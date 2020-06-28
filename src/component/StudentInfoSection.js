import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomSLider from './CustomSlider'

const style = {
    round: {
        borderRadius:'25px',
        border: '2px solid #73AD21',
        padding: '10px',
        width: '1200px',
        height: '250px',
        textALign : 'center',
        margin: '25px'
    },
    pride: {
        textALign : 'center'
    }

}


export default function StudentInfo() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <h3 style={style.pride}> Our Pride</h3>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12}>
                    <div style={style.round}>
                        <CustomSLider />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}