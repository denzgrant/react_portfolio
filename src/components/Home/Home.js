import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './Home.css';
import Wallpaper from '../../redwoods.jpg'



class MinimalisticIntro extends React.Component {
    state = {
        collapsed: false
    };


    handleTogglerClick = () => {
        const { collapsed } = this.state;

        this.setState({
            collapsed: !collapsed
        });
    };

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount() {
        document.querySelector('nav').style.height = 'auto';
    }

    render() {
        const { collapsed } = this.state;
        const navStyle = { marginTop: '4rem' };
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='minimalistintro'>
                <Router>
                    <div>
                        <MDBNavbar
                            color='primary-color'
                            style={navStyle}
                            dark
                            expand='md'
                            fixed='top'
                            scrolling
                            transparent
                        >
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <strong className='white-text'>Denzell Grant</strong>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={collapsed} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem active>
                                            <MDBNavLink to='/'>Home</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='#!'>About Me</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to='/portfolio'>Portfolio</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {collapsed && overlay}
                    </div>
                </Router>
                <MDBView src={Wallpaper}>
                    <MDBMask className='rgba-black-light' />
                    <MDBContainer
                        className='d-flex justify-content-center align-items-center'
                        style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
                    >
                        <MDBRow>
                            <MDBCol md='12' className='mb-4 white-text text-center'>
                                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                                    Denzell Grant
                </h1>
                                <hr className='hr-light my-4' />
                                <h5 className='text-uppercase mb-4 white-text '>
                                    <strong>Full-Stack Web Developer </strong>
                                </h5>
                                <MDBBtn outline color='white'>
                                    <Router>
                                        <Link to="/portfolio">portfolio</Link>
                                    </Router>
                                </MDBBtn>

                                <MDBBtn outline color='white'>
                                    About me
                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default MinimalisticIntro;