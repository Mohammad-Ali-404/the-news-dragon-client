/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link to='/category/0'>Home</Link>
                            <Nav.Link to="about">About</Nav.Link>
                            <Nav.Link to="career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&<Nav.Link >
                                <Link>
                                    <FaUserCircle style={{fontSize: '2rem'}}>
                                    </FaUserCircle>
                                </Link>
                            </Nav.Link>}       
                               {user ? 
                                <Button onClick={handleLogOut} variant="secondary">Log Out</Button>:
                                <Link to='/login'><Button variant="secondary">Login</Button></Link>
                               }
                        </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;