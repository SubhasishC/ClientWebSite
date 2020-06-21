import React from 'react';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


function Header() {
    return (
                <div style={divStyle} id='top-notification'>
                   
                    <span class="register">
                        <a href="register">Register Now</a>
                        <a href="login">  |  </a>
                        <a href="login">Student Log-In</a>
                        <a href="login">  |  </a>
                        <a href="https://www.facebook.com/learnbuildteach/" className="facebook social" >
                            <FontAwesomeIcon icon={faFacebook} size="1x" />
                        </a>
                        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="1x" />
                        </a>
                        <a href="https://www.youtube.com/c/jamesqquick" className="youtube social" >
                            <FontAwesomeIcon icon={faYoutube} size="1x" />
                        </a>
                    </span>
                </div>
    )
}


const divStyle = {
    background: 'cornsilk',
    textAlign: 'right'
  }

const linkStyle = {
    color : '#000000'
}
export default Header