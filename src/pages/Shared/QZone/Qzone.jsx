/* eslint-disable no-unused-vars */
import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const Qzone = () => {
    return (
        <div className='bg-light my-4 py-4'>
            <h3>Q-Zone</h3>
            <div  className='text-center'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;