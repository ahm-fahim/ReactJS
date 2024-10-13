import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSubtitles, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  const {
    company,
    company_logo,
    job_title,
    job_type,
    works_duration,
    salary_range,
    experience,
    skill,
    job_description,
    educational_requirements,
    job_responsibility,
    job_location,
    phone_number,
    email,
    bonus,
  } = job;
  console.log(company);

  return (
    <div>
      <div className="bg-green-100 h-60 flex justify-center items-center">
        <h1 className="font-anton text-4xl">Job Details</h1>
      </div>
      <div className="w-5/6 m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
        <div>
          <div className="my-2">
            <h1 className="text-black">Job Description : </h1>
            <p className="text-gray-500 text-sm">{job_description}</p>
          </div>
          <div className="my-2">
            <h1 className="text-black ">Job Responsibility : </h1>
            <p className="text-gray-500 text-sm">{job_responsibility}</p>
          </div>
          <div className="my-2">
            <h1 className="text-black ">Educational Requirement : </h1>
            <p className="text-gray-500 text-sm">{educational_requirements} </p>
          </div>
          <div className="my-2">
            <h1 className="text-black">Experience :</h1>
            <p className="text-gray-500 text-sm">{experience}</p>
          </div>
          <div className="my-2">
            <h1 className="text-black">Skills :</h1>
            <p className="text-gray-500 text-sm ">
              {skill.map((item, idx) => (
                <li className="ml-4" key={idx}>
                  {item}
                </li>
              ))}
            </p>
          </div>
          <div className="my-2">
            <h1 className="text-black">Job Type :</h1>
            <p className="text-gray-500 text-sm">{job_type}</p>
          </div>
          <div className="my-2">
            <h1 className="text-black">Job Time :</h1>
            <p className="text-gray-500 text-sm">{works_duration}</p>
          </div>
        </div>
        <div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="font-anton text-black text-center text-xl mb-5">
              Job Details
            </h2>
            <p className="text-gray-500 flex flex-row items-center">
              <MdOutlineSubtitles className="mr-1 text-xl text-green-500" />{" "}
              <span className="text-black">Job Title : </span>
              {job_title}
            </p>
            <p className="text-gray-500 flex flex-row items-center">
              <RiMoneyDollarCircleLine className="mr-1 text-xl text-green-500" />{" "}
              <span className="text-black">Salary : </span>
              {salary_range}
            </p>

            <p className="text-gray-500 flex flex-row items-center">
              <RiMoneyDollarCircleLine className="mr-1 text-xl text-green-500" />{" "}
              <span className="text-black">Bonus : </span>
              {bonus}
            </p>

            <h2 className="font-anton text-black mt-5 mb-2">
              Contact Information{" "}
            </h2>
            <hr className="mx-10 mb-5" />
            <p className="text-gray-500 flex flex-row items-center">
              <FaPhoneAlt className="mr-1 text-xl text-green-500" />{" "}
              <span className="text-black">Phone : </span>
              {phone_number}
            </p>
            <p className="text-gray-500 flex flex-row items-center">
              <MdEmail className="mr-1 text-xl text-green-500" />{" "}
              <span className="text-black">Email : </span>
              {email}
            </p>
            <p className="text-gray-500 flex flex-row items-center">
              <IoLocationSharp className="mr-1 text-xl text-green-500" />{" "}
              <span className="text-black">Address : </span>
              {job_location}
            </p>
          </div>
          <button className="btn btn-success w-full btn-sm  mt-5">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

JobDetails.propTypes = {};

export default JobDetails;
