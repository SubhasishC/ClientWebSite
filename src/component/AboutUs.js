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
                    <p>Lucent Institute of Advanced Studies (Lucent IAS) is a coaching institute providing coaching programs for Civil Service Exams conducted by UPSC and APSC as well as other government/semi-government/banking recruitments exams. Started in 2019, the primary goal of Lucent IAS is to produce as many Civil Servants as possible from the North-East region.</p>
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
                    <p>There is no dearth of talent in the region but lack of proper guidance has been a concern for the aspirants. Many aspirants has to move to the cities like Delhi to pursue their dream of clearing exams like UPSC CSE. But not all aspirants can afford the cost and other hurdles associated with it. Then again there is the risk of fraud coaching centres with dubious credentials of faculty members as often heard from the aspirants who feel cheated after taking admission in such institutes.</p>
                    <p>Being experienced with the preparation of Civil Service Exams, the founders of Lucent IAS are well aware of all the challenges faced by an aspirant during preparation. Quality, Transparency, Affordability and Motivation are the four pillars of Lucent IAS. The experienced faculty members have themselves cleared various National and State Level competitive recruitment exams during their preparation stage and now extending their helping hand to garner talents from the NE region.</p>
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