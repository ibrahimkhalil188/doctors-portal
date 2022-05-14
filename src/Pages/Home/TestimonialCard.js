import React from 'react';

const TestimonialCard = ({ user }) => {
    const { img, name, city, description } = user
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{description}</p>
                </div>
                <div className='flex'>
                    <div className="avatar m-6">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-3xl'>{name}</h1>
                        <h2 className='text-2xl'>{city}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;