import React from 'react';
import Faq from "react-faq-component";
import data from  './data/faq.json'
import { Row, Container, Col } from 'react-bootstrap'

const faqStyles = {
     bgColor: 'white',
    titleTextColor: "#505050",
    rowTitleColor: "#505050",
     rowContentColor: 'grey',
     arrowColor: "black",
};

const styles = {
    container: {
        padding: '70px 300px 100px 100px'
    },
    row: {
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
};
 
class FAQComponent extends React.Component {
    render() {
        return (
            
            <Container fluid style={styles.container}>
            <Row>
                <Col xl={12}>
                    <Faq data={data} styles={faqStyles} />
                </Col>
                
            </Row>
            </Container>

        );
    }
}

export default FAQComponent