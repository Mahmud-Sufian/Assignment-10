import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, comment, img} = service;
    return (
        <div className='border text-center rounded-lg p-1 bg-rose-100 shadow'>
            <div className=''>
                <img style={{width: '100%', borderRadius:'10px'}} src={img} alt="" />
            </div>
            {/* <img style={{width: '60px'}} src={img} alt="" /> */}
            <h3 className='text-2xl'>{name}</h3>
            <p className='py-2'>{comment}</p>
            <p>Price: <small>$30</small></p>
            <button className='bg-rose-200 mt-3 rounded-lg hover:bg-rose-300 px-5 py-2'><Link>Buy</Link></button>
        </div>
    );
};

export default Service;