import React from 'react';
import { Row, Container, Col, Form } from 'react-bootstrap'
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

const style = {
    overall : {
        margin : '40px',
        padding: '40px'
    },
    player : {
        padding: '40px'
    }
}  

export default function StudentCourse() {

    return (
        <div>
            <Col md={{ span: 10, offset: 9 }}>
            <Form  >
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Courses</Form.Label>
                <Form.Control as="select">
                <option>IAS</option>
                <option>APSC</option>
                <option>Banking</option>
                <option>SSC</option>
                <option>Others</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Videos</Form.Label>
                <Form.Control as="select">
                <option>IAS</option>
                <option>APSC</option>
                <option>Banking</option>
                <option>SSC</option>
                <option>Others</option>
                </Form.Control>
              </Form.Group>            
              </Form>
              {/* <Player
                // ref={player => {
                //     this.player = player;
                // }}
                videoId="video-1"
                >
                <source src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}/>
                </Player> */}
                <div style={style.player}>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='500px'
                    height='500px'
                 />
                 </div>
            </Col>
        </div>
    )
}