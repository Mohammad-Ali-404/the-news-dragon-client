/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftZone from '../LeftZone/LeftZone';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() =>{
        fetch('https://the-news-dragon-server-wpmohammad1.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h3>All Category</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                    key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className=' text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <LeftZone></LeftZone>
        </div>
    );
};

export default LeftNav;