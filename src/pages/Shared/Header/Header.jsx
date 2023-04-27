/* eslint-disable no-unused-vars */

import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary mt-2'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link to="home">Home</Nav.Link>
                            <Nav.Link to="about">About</Nav.Link>
                            <Nav.Link to="career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to="profile">Profile</Nav.Link>       
                            <Button variant="secondary">Login</Button>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;