import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-rose-100 p-2 mt-4   static bottom-0  w-full'>
            <p className='text-center '>All Right Reserved @ {new Date().toDateString()}</p>
        </footer>
    );
};

export default Footer;