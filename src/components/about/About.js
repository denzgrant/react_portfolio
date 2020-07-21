import React from "react";
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';





const About = () => {
    return (
        <div className="background">
            <Container>
                <Row>
                    <Col xs={12} md={12}><h1 class="title">Hello, I'm Denzell Grant.<br></br>
                I'm a Full-Stack Web Developer.</h1></Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;