import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
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
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary text-center m-4">{name}</h3>
                    <p class="py-4">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-items-center' >
                            <input type="text" name='date' placeholder="Type here" class="input bg-base-200 w-full max-w-xs" value={format(date, 'PP')} readOnly />
                            <select name='slot' class="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose your time.</option>
                                {
                                    slots?.map(slot =>
                                        <option>{slot}</option>

                                    )
                                }
                            </select>
                            <input type="text" name='name' placeholder="Your name" class="input  w-full max-w-xs bg-base-200" />
                            <input type="email" name='email' placeholder="Your email" class="input   w-full max-w-xs bg-base-200" />
                            <input type="number" name='phone' placeholder="Phone number" class="input   w-full max-w-xs bg-base-200" />
                            <button className="btn btn-primary w-full max-w-xs ">Submit</button>
                        </form>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;