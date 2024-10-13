import React from "react";
import  cover  from "../../../assets/cover_image.png";

const Hero = () => {
  return (
    <div>
      <div className="hero bg-green-100 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={cover} className="h-full w-full lg:mb-[-42px]" />
          <div>
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
