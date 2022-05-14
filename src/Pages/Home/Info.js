import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='flex gap-4 container mx-auto'>
            <div className='flex items-center bg-gradient-to-r from-primary to-secondary w-[486px] h-[186px] rounded-2xl'>
                <img className='w-[86px] h-[86px] mx-6' src={clock} alt="" />
                <div className='text-white'>
                    <h1 className='text-2xl'>Opening hour !</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatum!</p>
                </div>
            </div>
            <div className='flex items-center bg-black w-[486px] h-[186px] rounded-2xl'>
                <img className='w-[86px] h-[86px] mx-6' src={location} alt="" />
                <div className='text-white'>
                    <h1 className='text-2xl'>Visit our location !</h1>
                    <p>Brooklyn, NY 10036, United States!</p>
                </div>
            </div>
            <div className='flex items-center bg-gradient-to-r from-primary to-secondary w-[486px] h-[186px] rounded-2xl'>
                <img className='w-[86px] h-[86px] mx-6' src={phone} alt="" />
                <div className='text-white'>
                    <h1 className='text-2xl'>Contact Us!</h1>
                    <p>+932 238 343 </p>
                </div>
            </div>
        </div>
    );
};

export default Info;