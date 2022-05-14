import React from 'react';

const Service = ({ img, cardTitle }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl border hover:border-secondary py-6">
                <figure><img src={img} alt="services" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {cardTitle}
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default Service;