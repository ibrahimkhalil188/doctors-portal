import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { name, slots } = treatment

    const handleSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        const phone = event.target.phone.value
        const email = event.target.email.value
        const InputDate = event.target.date.value
        console.log(InputDate, slot, phone, email)
        setTreatment(null)

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
                            <input type="number" name='phone' placeholder="Phone number" className="input   w-full max-w-xs bg-base-200" />
                            <button className="btn btn-primary w-full max-w-xs ">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;