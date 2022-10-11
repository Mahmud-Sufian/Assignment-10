import React from 'react';
import mechanic1 from '../../../img/mechanic.png';
import Service from './../Service/Service';

const Services = () => {

    const services = [
        {id: 1, name: 'Engine Repair', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have', img: mechanic1},
        {id: 2, name: 'Tires Replacement', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have', img: mechanic1},
        {id: 3, name: 'Transmission', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have', img: mechanic1},
        {id: 4, name: 'Diagnostic', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have', img: mechanic1},
        {id: 5, name: 'Batteries', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have', img: mechanic1},
        {id: 6, name: 'Breaks', comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have', img: mechanic1}
    ];

    return (
        <div className='p-5'>
            <h1 className='text-center mb-5 text-5xl text-rose-400'>Our Services</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;