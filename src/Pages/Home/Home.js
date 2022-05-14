import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;