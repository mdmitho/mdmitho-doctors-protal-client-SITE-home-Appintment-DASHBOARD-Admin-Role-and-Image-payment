import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimatyButton from "../Shared/PrimatyButton";

const MakeAppointment = () => {
    return (
      <section
        style={{
          background: `url(${appointment})`,
        }}
        className="flex justify-center items-center text-white text-left m-5"
      >
        <div className="flex-1 hidden lg:block">
          <img className="mt-[-150px] " src={doctor} alt="" />
        </div>
        <div className="flex-1  p-8 ">
          <h3 className="text-xl font-bold text-cyan-500  ">Appointment</h3>
          <h2 className="text-3xl  mt-2">Make an Appointment Today</h2>
          <p className=" mt-2 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis alias quos
            eum laborum ea fugiat blanditiis ex error similique iusto soluta ipsam tempore quod
            molestias ut nemo itaque, expedita, laboriosam illum cumque quia tenetur. Veritatis
            in cumque ea expedita?
          </p>
          <PrimatyButton className="">get started</PrimatyButton>
        </div>
      </section>
    );
};

export default MakeAppointment;