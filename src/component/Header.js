import React from 'react';

function Header() {
    return (
            <nav>
                    <div style={divStyle} id='top-notification' >
                        <a style={linkStyle} href="html">Pre Exam1</a> |
                        <a style={linkStyle} href="ll">Pre Exam2</a>
                    </div>
            </nav>
    )
}


const divStyle = {
    background: '#cd5c5c',
    textAlign: 'center',
  }

const linkStyle = {
    color : '#000000'
}
export default Header