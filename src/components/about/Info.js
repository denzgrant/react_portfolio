import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myself from '../../images/myself.JPG'
import "./Info.css"


class Info extends Component {
    render() {
        return (
            <Container className="section">
                <Row>
                    <Col className="myself" xs={6} md={4} >
                        <Image src={myself} alt="test" />
                    </Col>
                    <Col xs={6} md={4}>
                       
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Info; 