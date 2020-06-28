import React from "react";
import { Container, Col, Row } from 'mdbreact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const style = {
  link: {
    textAlign: 'center',
    backgroundColor: 'lightblue'
  },
  main: {
    backgroundColor: 'lightblue'
  }
}

const FooterPage = () => {
  return (
    <Container fluid style={style.main}>

        <Row>
        <Col>
            <h5 className="title">Contact Details</h5>
            <p>
              <b>Head office: </b>Head office
            </p>
          </Col>
          <Col>
            <h5 className="title">Follow us on</h5>
            <ul>
              <li className="list-unstyled"> 
              <a href="https://www.facebook.com/learnbuildteach/" className="facebook social" >
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
              </li>
              <li className="list-unstyled">
              <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
              </li>
              <li className="list-unstyled">
              <a href="https://www.youtube.com/watch?v=_lPnkEoZ88I" className="youtube social" >
                            <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </a>
              </li>
            </ul>
          </Col>
          
        </Row>
      <Row>
      <div className="footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>

      </div>

      </Row>
          </Container>
  );
}

export default FooterPage;