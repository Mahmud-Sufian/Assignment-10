import React from 'react';
import wallpaper from '../../../img/wallpaper.png';

const WallPaper = () => {
    return (
        <div className='md:flex items-center pl-5'>
            <div className="info">
                <h1 className='text-4xl text-rose-400'>We Ensure Your Safe& Happy Journey</h1>
                <p className='my-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffer</p>
                <button className='bg-rose-100 py-2 px-5 rounded-lg font-semibold hover:bg-rose-200'>Contact Us</button>
            </div>
            <div className="wallpaper mr-10 md:mr-0">
                <img src={wallpaper} alt="" />
            </div>
        </div>
    );
};

export default WallPaper;