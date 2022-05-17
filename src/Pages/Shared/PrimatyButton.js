import React from "react";

const PrimatyButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary border-0 font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
        {children}
      </button>
    </div>
  );
};

export default PrimatyButton;
