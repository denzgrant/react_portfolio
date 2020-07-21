import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import myself from '../../images/myself.JPG'
import "./Info.css"


const Info = () => {
        return (
            <Container className="section">
                <Row>
                    <Col className="myself" xs={4} md={4} >
                        {/* <Image src={myself} alt="test" /> */}
                    </Col>
                    <Col xs={8} md={8}>
                       
                    </Col>
                </Row>
            </Container>
        )

}

export default Info; 