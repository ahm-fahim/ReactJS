import React from "react";
import cover from "../../../assets/cover_image.png";
import cover2 from "../../../assets/cover2.png";

const Hero = () => {
  return (
    <div>
      <div className="bg-green-100">
        <div className="flex flex-col w-5/6 m-auto justify-center items-center lg:flex-row-reverse">
          <div className="h-full w-5/6 pt-10">
            <img src={cover} className="hidden lg:flex border-r-2 border-b-2 border-green-500" />
            <img src={cover2} className="lg:hidden border-b-2 border-l-2 border-green-500" />
          </div>

          <div className="py-10">
            <h1 className="text-5xl font-bold font-anton text-black">
              One Step Closer To Your Dream Job
            </h1>
            <p className="py-6 text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-success btn-sm">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
