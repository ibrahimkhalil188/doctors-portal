import React from 'react';
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const users = [
        {
            _id: "1",
            img: person1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson henry",
            city: "California"

        },
        {
            _id: "2",
            img: person2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson henry",
            city: "California"

        },
        {
            _id: "3",
            img: person3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson henry",
            city: "California"

        }
    ]
    return (
        <div>
            <div className='flex justify-between mt-16'>
                <div>
                    <h3 className='text-2xl text-secondary font-bold'>Testimonial</h3>
                    <h1 className='text-4xl py-4'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-[192px] h-[156px]' src={quote} alt="" />
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    users.map(user => <TestimonialCard key={user._id} user={user}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;