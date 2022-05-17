import React from 'react';
import {useQuery} from 'react-query'
import { useParams } from 'react-router-dom';
import Loading from "../../Pages/Shared/Loading";


const Payment = () => {
    const {id} = useParams()
    const url = `http://localhost:5000/booking/${id}`;
    const { data:appointment,isLoading } = useQuery("booking", () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
if(isLoading){
    return <Loading></Loading>
}

    return (
      <div>
        <h1>payment</h1>
        <h2 className="text-2xl text-purple-500">Please Play for : {id}</h2>

        <div class="card w-50 max-w-md bg-primary text-white shadow-xl my-12">
          <div class="card-body">
              <p className="font-bold">Hello, {appointment.patientName}</p>
            <h2 class="card-title">Pay for {appointment.treatment}</h2>
            <p>
             Your Appointment: <span className="text-black"> {appointment.date} </span> at{" "}
              {appointment.slot}{" "}
            </p>
            <p>Please pay : ${appointment.price}</p>
            <div class="card-actions justify-end">
              <button class="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div class="card  w-50 max-w-md  flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div class="card-body"></div>
        </div>
      </div>
    );
};

export default Payment;