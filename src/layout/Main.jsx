/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import {Container, Row, Col} from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
                <Container className='mt-4'>
                    <Row>
                        <Col lg={3}>
                            <LeftNav></LeftNav>
                        </Col>
                        <Col lg={6}>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={3}>
                            <RightNav></RightNav>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;