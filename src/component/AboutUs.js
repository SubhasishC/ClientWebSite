import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import FacultyList from './FacultyList';
import YouTube from 'react-youtube';

const headingStyle = {
    color: "#505050",
    fontFamily: "Roboto",
    padding: "20px"
  }
const blockStyle = {
    padding: "20px"
}
const opts = {
    height: '290',
    width: '440',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
function Aboutus() {
    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={7}>
                <div style={blockStyle}>
                    <h1 style={headingStyle}>About Lucent Academy</h1>
                    <p>Best IAS Coaching Centre in Bangalore (LIA) had its inception with the synergies of a group of efficient tutors, which included veteran IAS/IPS/IRS officers, Academics and extraordinary tutors. LIA, as the name suggests, is an outcome of some inspiring work in the field of Civil Services tutoring. As an abode of knowledge, LIA today intends to build on the legacy of its successes and continue to help aspirants realise their dreams of becoming a part of Civil Services community. No doubt, LIA is the Best IAS Academy in Bangalore.</p>
                </div>
            </Col>
            <Col xs={3}>
                <div style={blockStyle}>
                    <YouTube videoId="ZD3Sb_7zkWA" opts={opts}/>
                </div>     
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={10}>
                <div style={blockStyle}>
                    <h1 style={headingStyle}>Our Vision</h1>
                    <p>Best IAS Coaching Centre in Bangalore (LIA) had its inception with the synergies of a group of efficient tutors, which included veteran IAS/IPS/IRS officers, Academics and extraordinary tutors. LIA, as the name suggests, is an outcome of some inspiring work in the field of Civil Services tutoring. As an abode of knowledge, LIA today intends to build on the legacy of its successes and continue to help aspirants realise their dreams of becoming a part of Civil Services community. No doubt, LIA is the Best IAS Academy in Bangalore.</p>
                </div>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs={10}>
                <div style={blockStyle}>
                    <h1 style={headingStyle}>Our Team</h1>
                        <FacultyList /> 
                </div>
            </Col>
        </Row>
        </Container>
    )
}

export default Aboutus