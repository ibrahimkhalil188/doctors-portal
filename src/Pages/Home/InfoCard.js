import React from 'react';

const InfoCard = ({ img, bgColor, cardTitle }) => {
    return (
        <div className='text-white '>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
                <figure>
                    <img className='m-6 lg:ml-6' src={img} alt="Album" /></figure>
                <div class="card-body" >
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div >
    );
};

export default InfoCard;