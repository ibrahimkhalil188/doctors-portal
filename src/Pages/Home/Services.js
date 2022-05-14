import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import ServiceBanner from './ServiceBanner';
const Services = () => {
    return (
        <div>
            <div className='my-16'>
                <h1 className='text-secondary text-2xl font-bold text-center'>OUR SERVICES</h1>
                <h1 className='text-5xl text-center my-2'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service cardTitle="Fluoride Treatment" img={cavity}></Service>
                <Service cardTitle="Fluoride Treatment" img={fluoride}></Service>
                <Service cardTitle="Fluoride Treatment" img={whitening}></Service>
            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Services;