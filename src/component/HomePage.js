import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import PageTitle from './PageTitle'
import  Info from './Info'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component {
    render() {
        const images = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
        ];
            return (
                <Container>
                <Row>
                    <PageTitle title='Home page' />
                </Row>    
                <Row>
                    <Col md="auto">
                        <SimpleImageSlider
                            style={{ position: 'left',margin: "0 auto", marginTop: "50px" }}
                            width={600}
                            height={400}
                            images={images}
                        />
                    </Col>
                    <Col md="auto">
                        <Row>
                            <Info />
                        </Row>
                        
                        <Row>
                            <Info />
                        </Row>
                        <Row>
                            <Info />
                        </Row>
                    </Col>
                </Row>
                <Row>

                </Row>
                
                </Container>
            );
    }
}

export default HomePage