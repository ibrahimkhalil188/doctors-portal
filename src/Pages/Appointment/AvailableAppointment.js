import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ selected }) => {

    const [treatment, setTreatment] = useState(null)
    const [appointmentServices, setAppointmentServices] = useState([])
    const formattedDate = format(selected, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?InputDate=${formattedDate}`)
            .then(res => res.json())
            .then(data => setAppointmentServices(data))
    }, [formattedDate])
    console.log()
    return (
        <div>
            <h1 className='text-center text-primary text-2xl mb-12'>Available appointment on {format(selected, 'PP')}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {appointmentServices.map(data =>
                    <div key={data._id}>
                        <div className="card text-primary-content shadow-lg items-center">
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.slot[0] ? <span> {data.slot[0]}</span> : <span className='text-red-500'>Try another day</span>}</p>
                                <p className='text-xl'>{data.slot.length} {data.slot.length ? "Slots" : "Slot"} available</p>


                                <label
                                    onClick={() => setTreatment(data)}
                                    disabled={data.slot.length === 0} htmlFor="my-modal-6" className="btn btn-primary">Book appointment</label>

                                {
                                    treatment && <BookingModal date={selected} treatment={treatment} setTreatment={setTreatment}></BookingModal>
                                }
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