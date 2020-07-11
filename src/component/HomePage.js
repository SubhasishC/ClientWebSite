import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import PageTitle from './PageTitle'
import  Info from './Info'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './ContentBox';
import StudentInfo from './StudentInfoSection'; 
import TextField from '@material-ui/core/TextField';
import Footer from '../component/Footer';

const style = {
    
}

class HomePage extends React.Component {
    render() {
        const images = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
        ];
        const student_images = [
            { url: "student_images/1.jpg" },
            { url: "student_images/2.jpg" },
            { url: "student_images/3.jpg" },
        ];
        const h1 = 'Heading';
        const b1 = 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque  tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.';
            return (
                <Container>
                <Row className="justify-content-md-center">
                    <Col>    
                    <SimpleImageSlider
                            style={{ marginTop: "1px" }}
                            width={1296}
                            height={420}
                            images={images}
                            showBullets={true}
                            slideDuration={1}
                            showNavs={false}
                            navStyle={1}
                            useGPURender={true}
                        />
                    </Col>    
                </Row>        
                <Row className="justify-content-md-center">
                    <div>
                        <h1 style={{color: "blue",fontFamily:"sans-serif",textAlign:'center', padding: '10px 10px 10px 10px '}}>Lucent Academy</h1>
                        <h1>Coaching Academy </h1>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Info 
                            heading={h1}
                            body={b1}
                            />
                    </Col>
                    <Col>
                    <Info 
                            heading={h1}
                            body={b1}
                            />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Info 
                            heading={h1}
                            body={b1}
                            />
                    </Col>
                    <Col>
                    <Info 
                            heading={h1}
                            body={b1}
                            />
                    </Col>
                </Row>
                <div>
                    <StudentInfo />
                </div>
                </Container>
            );
    }
}

export default HomePage