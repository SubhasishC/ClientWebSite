import React from 'react'
import Box from '@material-ui/core/Box';
import Media from 'react-bootstrap/Media'

const Info = (props) => {
    return (
        <Media>
  <Media.Body>
    <h5>{props.heading}</h5>
    <p>{props.body}</p>
  </Media.Body>
</Media>
    )
}

export default Info