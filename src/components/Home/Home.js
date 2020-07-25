import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer
} from 'mdbreact';
import './Home.css';
import Wallpaper from '../../images/indonesia.jpg'



class Home extends Component {
    state = {
        collapsed: false
    };


    handleTogglerClick = () => {
        const { collapsed } = this.state;

        this.setState({
            collapsed: !collapsed
        });
    };

    render() {
        const { collapsed } = this.state;
        const overlay = (
            <div
                id='sidenav-overlay'
                style={{ backgroundColor: 'transparent' }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id='minimalistintro'>
                <div>
                    {collapsed && overlay}
                </div>
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

                                    <Link to="/portfolio">portfolio</Link>

                                </MDBBtn>

                                <MDBBtn outline color='white'>
                                    <Link to="/about-me">About Me</Link>
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBView>
            </div>
        );
    }
}

export default Home;