import React from 'react';
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';
const ServiceBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen lg:px-12">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={treatment} className="lg:max-w-sm rounded-lg shadow-2xl" alt='Treatment' />
                    <div className='lg:ml-10'>
                        <h1 className="text-2xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;