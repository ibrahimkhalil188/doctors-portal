import React, { useEffect, useState } from 'react';

const AvailableAppointment = () => {
    const [appointmentServices, setAppointmentServices] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/doctors-portal-client-module-72/main/public/services.json")
            .then(res => res.json)
            .then(data => setAppointmentServices(data))
    })
    return (
        <div>
            {appointmentServices.map(data =>
                <div>
                    { }
                </div>
            )}
        </div>
    );
};

export default AvailableAppointment;