import React from "react";
import { CheckCircle2 } from "lucide-react";
import codePng from "../assets/code.jpg";

import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:test-5xl lg:text-6xl tracking-wide mt-6  text-center">
        Accerlerate your
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800">
          {""} coding workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codePng} alt="loading" />
        </div>
        <div className=" pt-12 w-full lg:w-1/2 ">
          {checklistItems.map((items, index) => (
            <div key={index} className=" mb-12 flex">
              <div className="mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center rounded-full items-center text-green-400">
                <CheckCircle2 />
              </div>
              <div className="">
                <h5 className="mt-1  mb-2 text-xl">{items.title}</h5>
                <p className="text-md text-neutral-500">{items.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
