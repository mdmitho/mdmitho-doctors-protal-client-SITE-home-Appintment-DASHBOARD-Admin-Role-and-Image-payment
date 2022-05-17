import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from '../Review/Review';
const Testimonials = () => {
    const reviews =[
        {
            _id:1,
            name: 'Winson Herry',
            review:'',
            location: 'california',
            img : people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review:'',
            location: 'california',
            img : people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review:'',
            location: 'california',
            img : people3
        },
    ]
    return (
      <section className="my-28">
        <div className="flex justify-between">
          <div className="text-left">
            <h4 className="text-xl text-cyan-500 ml-3 font-bold">Testimonials</h4>
            <h1 className="text-3xl text-black ml-3 ">What Our Patients Say</h1>
          </div>
          <div className="">
            <img src={quote} className="w-24 lg:w-48" alt="" />
          </div>
        </div>
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  m-5">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
    );
};

export default Testimonials;