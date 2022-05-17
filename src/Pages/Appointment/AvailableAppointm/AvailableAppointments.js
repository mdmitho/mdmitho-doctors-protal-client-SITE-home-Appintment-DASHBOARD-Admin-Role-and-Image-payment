import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import AppointmentService from "../AppointmentService/AppointmentService";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ date }) => {
  // const [services, setServices] = useState([])
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  // useEffect(()=>{
  //     fetch(`https://salty-hollows-38787.herokuapp.com/available?date=${formattedDate}`)
  //       .then((res) => res.json())
  //       .then((data) => setServices(data));
  // },[formattedDate])

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-xl text-center text-secondary my-12">
        Available Appointments on {format(date, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointmentService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          refetch={refetch}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
