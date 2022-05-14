import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const MakeAppointment = () => {
    return (
        <div className='mt-28'>
            <div className='flex' style={{ backgroundImage: `url(${appointment})` }}>
                <div className='flex-1'>
                    <img className='lg:mt-[-125px] md:mt-[-100px] hidden md:block lg:block' src={doctor} alt="" />
                </div>
                <div className='text-white py-6 flex-1 flex items-center'>
                    <div className='pr-10'>
                        <h3 className='text-2xl text-secondary font-bold'>Appointment</h3>
                        <h1 className='text-4xl py-6'>Make an appointment Today</h1>
                        <p className='pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;