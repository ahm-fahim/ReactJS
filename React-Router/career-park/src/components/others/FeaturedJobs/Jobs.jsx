import React from "react";
import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Jobs = ({ jobsList }) => {
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
    bonous: bonus,
  } = jobsList;
  return (
    <div className="bg-white rounded-md shadow-md p-10">
      <img
        src={company_logo}
        alt="company logo"
        className="w-28 rounded-lg mb-5"
      />
      <h1 className="text-xl font-bold">{job_title}</h1>
      <p className="text-sm text-gray-400">{company}</p>
      <div className="flex flex-row gap-10 my-2">
        <p className="border border-success rounded-md px-2 bg-green-50">
          {job_type}
        </p>
        <p className="border border-success rounded-md px-2 bg-green-50">
          {works_duration}
        </p>
      </div>
      <div className="flex flex-row gap-10 my-2">
        <p className="flex flex-row items-center">
          <IoLocationSharp  className="mr-2 text-2xl"/> {job_location}
        </p>
        <p className="flex flex-row items-center">
          <RiMoneyDollarCircleLine className="mr-2 text-2xl"/>
          Salary: {salary_range}
        </p>
      </div>
      <button className="btn btn-success btn-sm">View Details</button>
    </div>
  );
};

Jobs.propTypes = {
  jobsList: PropTypes.object.isRequired,
};

export default Jobs;
