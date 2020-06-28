import React from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import Faq from "react-faq-component";
import data from  './data/QuestionPaper.json'
import { Link } from 'react-router-dom'; 

const faqStyles = {
    bgColor: 'white',
   titleTextColor: "#505050",
   rowTitleColor: "#505050",
    rowContentColor: 'grey',
    arrowColor: "black",
}
const blockStyle = {
    padding: "40px"
}

function Content() {
    return (
        <Container>
        <Row className="justify-content-md-left" style={blockStyle}>
            <h3>CA</h3>
        </Row>    
        <Row className="justify-content-md-left">    
            <p>Best IAS Coaching Centre in Bangalore (LIA) had its inception with the synergies of a group of efficient tutors, which included veteran IAS/IPS/IRS officers, Academics and extraordinary tutors. LIA, as the name suggests, is an outcome of some inspiring work in the field of Civil Services tutoring. As an abode of knowledge, LIA today intends to build on the legacy of its successes and continue to help aspirants realise their dreams of becoming a part of Civil Services community. No doubt, LIA is the Best IAS Academy in Bangalore.</p>
        </Row>    
        <Row className="justify-content-md-left" style={blockStyle}>
            <h3>Question Paper</h3>
        </Row>    
        <Row className="justify-content-md-left">
        <Col xl={4}>
        {data.map(data => (
          <div key={data} className="container">
            <div class="text-center"><Link to={data.content} target="_blank"><h3>{data.title.toString()}</h3></Link></div>
          </div>
        ))}
                </Col>
        </Row>    
        <Row className="justify-content-md-left" style={blockStyle}>
            <h3>Syllabus</h3>
        </Row>    
        <Row className="justify-content-md-left">
            <p>Best IAS Coaching Centre in Bangalore (LIA) had its inception with the synergies of a group of efficient tutors, which included veteran IAS/IPS/IRS officers, Academics and extraordinary tutors. LIA, as the name suggests, is an outcome of some inspiring work in the field of Civil Services tutoring. As an abode of knowledge, LIA today intends to build on the legacy of its successes and continue to help aspirants realise their dreams of becoming a part of Civil Services community. No doubt, LIA is the Best IAS Academy in Bangalore.</p>
        </Row>
        </Container>
    )
}

export default Content;