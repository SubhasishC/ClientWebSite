import React from 'react';
import { Button } from 'react-bootstrap'
function Header() {
    return (
                <div style={divStyle} id='top-notification'>Register for <b>NAT @99/-</b>  
                    <span> Offer valid till 7th June 2020</span>
                    <span class="book">
                        <a href="nat.html">Book Now</a>
                    </span>
                </div>
    )
}


const divStyle = {
    background: '#4287f5',
    textAlign: 'center'
  }

const linkStyle = {
    color : '#000000'
}
export default Header