import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card lg:max-w-lg bg-accent text-white shadow-xl">
        <div className="card-body">
          <p className="text-left mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolore at quia
            dignissimos a quidem, exercitationem recusandae reprehenderit, mollitia deleniti,
            odit ex nam. Sequi fuga nisi
          </p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                <img src={review.img} />
              </div>
            </div>
            <div className="">
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
