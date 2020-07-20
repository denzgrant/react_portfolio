import React from "react";
import './About.css'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Info from "./Info"



const About = () => {
    return (
        <div className="background">
            <Container>
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="/" exact className="nav-link">About</NavLink>
                            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                            <Nav.Link href="https://docs.google.com/document/d/1nHbvtAf2ocPFz7yP8Sr8DLAQFcXk-KlLh-mxLlfFT8Q/edit?usp=sharing" target="_blank">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row>
                    <Col xs={12} md={12}><h1 class="title">Hello, I'm Denzell Grant.<br></br>
                I'm a Full-Stack Web Developer.</h1></Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Info />
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default About;