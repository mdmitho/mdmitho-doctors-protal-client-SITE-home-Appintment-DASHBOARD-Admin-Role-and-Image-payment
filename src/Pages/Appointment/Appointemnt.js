import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointm/AvailableAppointments';

const Appointemnt = () => {
    const [date, setDate] = useState(new Date());
    return (
      <div>
        <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
        <AvailableAppointments date={date}></AvailableAppointments>
        <Footer></Footer>
      </div>
    );
};

export default Appointemnt;