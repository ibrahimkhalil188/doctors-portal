import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ selected }) => {
    const [treatment, setTreatment] = useState({})
    const [appointmentServices, setAppointmentServices] = useState([])
    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setAppointmentServices(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-primary text-2xl mb-12'>Available appointment on {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {appointmentServices.map(data =>
                    <div key={data._id}>
                        <div class="card text-primary-content shadow-lg items-center">
                            <div class="card-body">
                                <h2 class="card-title">{data.name}</h2>
                                <p>{data.slots[0] ? <span> {data.slots[0]}</span> : <span className='text-red-500'>Try another day</span>}</p>
                                <p className='text-xl'>{data.slots.length} {data.slots.length ? "Slots" : "Slot"} available</p>


                                <label
                                    onClick={() => setTreatment(data)}
                                    disabled={data.slots.length === 0} for="my-modal-6" class="btn btn-primary">Book appointment</label>

                                <BookingModal date={selected} treatment={treatment}></BookingModal>
                            </div>
                        </div>
                    </div>
                )
                }
            </div >
        </div>
    );
};

export default AvailableAppointment;