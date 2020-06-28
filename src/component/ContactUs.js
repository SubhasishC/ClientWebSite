import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Info from './Info';
import MapContainer from './Map';
import Media from 'react-bootstrap/Media'

const h1 = 'Corporate Office'
const b1 = 'Address1'

const style = {
    img: {
        padding: '10px'
    },
    Offi: {
        padding: '20px'
    },
    address: {
        padding: '0px 20px 0px 20px'
    }
}

const data = fetch('/data/Address.json');



function ContactUs() {
    const [data, setData] = useState('');
   // fetch('/data/Address.json').then((resp) => resp.json()).then(data => setData(data));
    const fetchAddress = () => {
        fetch('/data/Address.json').then((resp) => resp.json()).then(data => setData(data));
    }

    useEffect(() => {
        fetchAddress();
    },[])
    console.log(data)
    return (
            <Container>
            <Row>
                <Col style={style.Offi}>
                    <Row>
                    <Media>
                        <Media.Body>
                            <h3 style={style.Offi}>Corporate Office</h3>
                            <h5 style={style.address}>{data.Address1}</h5>
                            <h5 style={style.address}>{data.Address2}</h5>
                            <h5 style={style.address}>{data.Address3}</h5>
                            <h5 style={style.address}>{data.Address4}</h5>
                            <h5 style={style.address}>{data.Address5}</h5>
                            <h3 style={style.Offi}>Contact Details</h3>
                            <h5 style={style.address}>{data.number}</h5>
                        </Media.Body>
                        </Media>
                    </Row>
                </Col>
                <Col style={style.img}>
                <img src="location.png" alt="Lucent Academy" width="500" height="500"/> 
                </Col>
            </Row>
            </Container>

    )
}

export default ContactUs