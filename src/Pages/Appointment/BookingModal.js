import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment
    const handleSubmit = event => {
        event.preventDefault()

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
                            <input type="text" placeholder="Type here" class="input bg-base-200 w-full max-w-xs" value={format(date, 'PP')} readOnly />
                            <select class="select select-bordered w-full max-w-xs">
                                <option disabled selected>Choose your time.</option>
                                {
                                    slots.map(slot =>
                                        <option>{slot}</option>

                                    )
                                }
                            </select>
                            <input type="text" placeholder="Type here" class="input  w-full max-w-xs bg-base-200" />
                            <input type="text" placeholder="Type here" class="input   w-full max-w-xs bg-base-200" />
                            <button className="btn btn-primary w-full max-w-xs ">Submit</button>
                        </form>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;