import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/booking?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user?.email])
    console.log(bookings)
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.displayName}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.slot}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;