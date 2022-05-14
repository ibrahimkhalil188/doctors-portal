import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const Contact = () => {
    return (
        <div className='mt-20 p-4' style={{ backgroundImage: `url(${appointment})` }}>
            <div className='my-6'>
                <h3 className='text-center text-secondary text-2xl font-bold'>Contact Us</h3>
                <h2 className='text-center text-4xl text-white'>Stay connect with us</h2>
            </div>
            <form className='grid place-items-center'>
                <input type="email" placeholder="Email Address" class="input input-bordered input-accent w-full max-w-xs" /><br></br>
                <input type="text" placeholder="Subject" class="input input-bordered input-accent w-full max-w-xs" /><br />
                <input type="text" placeholder="Type here" class="input input-bordered input-lg input-accent w-full max-w-xs" /><br></br>
                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default Contact;