import React from 'react'
import Box from '@material-ui/core/Box';
import Media from 'react-bootstrap/Media'

const Info = (props) => {
    return (
        <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{props.heading}</h5>
    <p>{props.body}</p>
  </Media.Body>
</Media>
    )
}

export default Info