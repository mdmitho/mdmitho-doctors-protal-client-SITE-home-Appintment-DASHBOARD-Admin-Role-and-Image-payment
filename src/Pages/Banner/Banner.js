import React from "react";
import chair from "../../assets/images/chair.png";
import PrimatyButton from "../Shared/PrimatyButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse text-left">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl text-black font-bold">You New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <PrimatyButton>get started</PrimatyButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
