import React from "react";
import { testimonials } from "../constants";

const Testinomials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className=" flex justify-center flex-wrap ">
        {testimonials.map((items, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{items.text}</p>
              <div className="mt-8 flex items-start">
                <img
                  className="h-12 w-12 border-neutral-300 rounded-full"
                  src={items.image}
                  alt="items.user"
                />
                <div>
                  <h6 className="mx-3">{items.user}</h6>
                  <span className="mx-3 font-normal text-sm text-neutral-600 italic">
                    {items.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testinomials;
