import { useState, useEffect } from "react";
import Jobs from "./Jobs";

const FeaturedJobs = () => {
  const [jobsData, setJobsData] = useState([]);
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {jobsData.map((jobsList) => (
          <Jobs key={jobsList.id} jobsList={jobsList}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
