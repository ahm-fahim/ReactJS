import React from "react";
import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Jobs = ({ jobsList,styled }) => {
  const {
    id,
    company,
    company_logo,
    job_title,
    job_type,
    works_duration,
    salary_range,
    job_location,
  } = jobsList;
  return (
    <div className={`bg-white rounded-md shadow-md p-5 lg:p-10 ${styled ? "mt-5 border-2 border-green-500": " "}`}>
      <img
        src={company_logo}
        alt="company logo"
        className="w-28 rounded-lg mb-5 border-l-2 border-r-2 border-green-400"
      />
      <h1 className="text-xl font-bold">{job_title}</h1>
      <p className="text-sm text-gray-400">{company}</p>
      <div className="flex flex-row gap-2 lg:gap-10 my-2">
        <p className="border border-success rounded-md px-2 bg-green-50">
          {job_type}
        </p>
        <p className="border border-success rounded-md px-2 bg-green-50">
          {works_duration}
        </p>
      </div>
      <div className="flex flex-row gap-2 lg:gap-10 my-2">
        <p className="flex flex-row items-center">
          <IoLocationSharp className="mr-2 text-2xl" /> {job_location}
        </p>
        <p className="flex flex-row items-center">
          <RiMoneyDollarCircleLine className="mr-2 text-2xl" />
          Salary: {salary_range}
        </p>
          </div>
          <hr className="mx-10 mt-5" />
      <Link to={`/jobDetails/${id}`} className="btn btn-success btn-sm mt-5">
        View Details
      </Link>
    </div>
  );
};

Jobs.propTypes = {
  jobsList: PropTypes.object.isRequired,
};

export default Jobs;
