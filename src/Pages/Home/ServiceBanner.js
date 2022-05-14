import React from 'react';
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';
const ServiceBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='Treatment' />
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6 ml-">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;