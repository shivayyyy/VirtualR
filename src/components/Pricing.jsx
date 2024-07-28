import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:5xl lg:6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((options, index) => (
          <div key={index} className="w-full  sm:w-1/2 lg:w-1/3">
            <div className="p-12 border mx-2 my-6 border-neutral-700 rounded-xl">
              <p className="text-4xl  mb-8">
                {options.title}
                {options.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 text-transparent text-xl mb-4 ml-2 to-orange-900 bg-clip-text">
                    (most popular)
                  </span>
                )}
                <p className=" mt-5 mb-8">
                  <span className="text-4xl mr-2">{options.price}</span>
                  <span className="text-xl text-neutral-400 tracking-tight">
                    /month
                  </span>
                </p>
                <ul>
                  {options.features.map((items, index) => (
                    <li key={index} className="mb-2 mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="text-xl ml-2 ">
                        {""}
                        {items}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center  text-center w-full h-12 mt-20 p-5 text-xl border rounded-xl border-orange-900 transition duration-300 hover:bg-orange-900 tracking-tight justify-center"
                >
                  Subscribe
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
