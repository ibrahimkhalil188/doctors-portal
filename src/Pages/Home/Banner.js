import React from 'react';
import bannerImage from "../../assets/images/chair.png"
import backgroundImage from "../../assets/images/bg.png"
import Info from './Info';
import Button from '../Shared/Button';
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero min-h-screen"
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-[594px] h-[355px]' src={bannerImage} alt="" />
                    <div className='mx-6'>
                        <h1 className=" text-2xl lg:text-5xl font-bold">Your New Smile Starts Here!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
            <div>
                <Info></Info>
            </div>
        </div >
    );
};

export default Banner;