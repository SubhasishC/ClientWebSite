import React from 'react'
import Box from '@material-ui/core/Box';
import Media from 'react-bootstrap/Media'
const style = {
  border:'2px solid blue',
  margin:'25px 50px 75px 100px',
  padding : '25px',
  borderRadius: '15px'
}
const Info = (props) => {
    return (
      <div style={style}>
        <Media>
          <Media.Body>
            <h5>{props.heading}</h5>
            <p>{props.body}</p>
          </Media.Body>
        </Media>
        </div>  
    )
}

export default Info