import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    return (
        <div>
            <AppointmentBanner></AppointmentBanner>
            <AvailableAppointment></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;