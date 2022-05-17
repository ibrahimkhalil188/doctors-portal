import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment
    const formattedDate = format(date, 'PP');
    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        const phone = event.target.phone.value
        const InputDate = event.target.date.value
        const treatmentId = _id
        const email = user?.email

        const booking = {
            treatmentId, name, InputDate, slot, phone, email
        }

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Appointment already  set on ${data.exist?.InputDate} at ${data.exist?.slot}`)
                }
                setTreatment(null)
                console.log(data)


            })


    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center m-4">{name}</h3>
                    <div className="py-4">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center' >
                            <input type="text" name='date' placeholder="Type here" className="input bg-base-200 w-full max-w-xs" defaultValue={format(date, 'PP')} readOnly />
                            <select name='slot' className="select select-bordered w-full max-w-xs">
                                {
                                    slots?.map((slot, index) =>
                                        <option key={index}>{slot}</option>

                                    )
                                }
                            </select>
                            <input type="text" name='name' placeholder="Your name" className="input  w-full max-w-xs bg-base-200" defaultValue={user?.displayName} readOnly />
                            <input type="email" name='email' placeholder="Your email" className="input   w-full max-w-xs bg-base-200" defaultValue={user?.email} readOnly />
                            <input type="number" name='phone' placeholder="Phone number" className="input   w-full max-w-xs bg-base-200" required />
                            <button className="btn btn-primary w-full max-w-xs ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;