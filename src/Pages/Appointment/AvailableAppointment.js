import React, { useEffect, useState } from 'react';
import Button from '../Shared/Button';

const AvailableAppointment = () => {
    const [appointmentServices, setAppointmentServices] = useState([])
    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setAppointmentServices(data))
    }, [])
    console.log(appointmentServices)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {appointmentServices.map(data =>
                <div>
                    <div class="card text-primary-content shadow-lg items-center">
                        <div class="card-body">
                            <h2 class="card-title">{data.name}</h2>
                            <p>{data.slots[0] ? <span> {data.slots[0]}</span> : <span className='text-red-500'>Try another day</span>}</p>
                            <p className='text-xl'>{data.slots.length} {data.slots.length ? "Slots" : "Slot"} available</p>

                            <button disabled={data.slots.length === 0} class="btn btn-primary">Book appointment</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AvailableAppointment;