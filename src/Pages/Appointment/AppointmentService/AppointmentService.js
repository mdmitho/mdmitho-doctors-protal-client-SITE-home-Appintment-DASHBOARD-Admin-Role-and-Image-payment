import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots,price } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl m-2 mt-8">
        <div className="card-body text-center">
          <h2 className="text-xl font-bold text-secondary">{name}</h2>
          <p>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500">Try Another date.</span>
            )}
          </p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
          <p><small>Price : ${price}</small></p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
              onClick={() => setTreatment(service)}
              htmlFor="Booking-modal"
              className="btn btn-sm btn-secondary text-white bg-gradient-to-r from-secondary to primary"
            >
              Book appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
