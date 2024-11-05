import { useState, useEffect } from "react";
import Jobs from "../../shared/Jobs/Jobs";

const FeaturedJobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [jobsDataLength, setJobsDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <div className="m-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-anton">Featured Jobs</h1>
        <p className="text-sm text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
        {jobsData.slice(0, jobsDataLength).map((jobsList) => (
          <Jobs key={jobsList.id} jobsList={jobsList}></Jobs>
        ))}
      </div>
      <div
        className={`mt-10 w-5/6 mr-10 flex justify-end items-end ${
          jobsDataLength === jobsData.length ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setJobsDataLength(jobsData.length)}
          className="btn btn-outline btn-success btn-sm"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
