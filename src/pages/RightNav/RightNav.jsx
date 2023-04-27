/* eslint-disable no-unused-vars */
import { Button, ListGroup } from 'react-bootstrap';
import { BsGoogle, BsGithub, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import React from 'react';
import Qzone from '../Shared/QZone/Qzone';
import bg from '../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mt-3' variant="outline-primary"> <BsGoogle /> Login with Google</Button>
            <Button className='mt-2' variant="outline-secondary"> <BsGithub /> cLogin with Github</Button>
            <div>
                <h3 className='mt-4'>Find Us On</h3>
                <ListGroup className='mt-2'>
                    <ListGroup.Item> <BsFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <BsTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <BsInstagram />  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;