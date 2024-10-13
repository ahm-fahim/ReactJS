import { useEffect, useState } from "react";
import { getApplication } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";
import Jobs from "../shared/Jobs/Jobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [application, setApplication] = useState([]);
  const [styled, setStyled] = useState(false);
  const [filterJob, setFilterJob] = useState([]);

  const handleFilter = (job) => {
    if (job === "all_jobs") {
      setFilterJob(application);
    } else if (job === "full_time") {
      const fullTime = application.filter(
        (data) => data.job_type === "Full-time"
      );
      setFilterJob(fullTime);
    } else if (job === "contract") {
      const contract = application.filter(
        (data) => data.job_type === "Contract"
      );
      setFilterJob(contract);
    } else if (job === "remote") {
      const remote = application.filter((data) => data.job_type === "Remote");
      setFilterJob(remote);
    } else if (job === "part_time") {
      const partTime = application.filter(
        (data) => data.job_type === "Part-time"
      );
      setFilterJob(partTime);
    }
  };

  useEffect(() => {
    const storedApplicationsID = getApplication();
    if (jobs.length > 0) {
      const appliedJobs = [];
      for (const id of storedApplicationsID) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          appliedJobs.push(job);
        }
      }
      setApplication(appliedJobs);
      setFilterJob(appliedJobs);
      setStyled(true);
    }
  }, []);

  return (
    <div>
      <div className="bg-green-100 h-60 flex justify-center items-center">
        <h1 className="font-anton text-black text-4xl">Applied Job</h1>
      </div>
      <div className="flex justify-start items-start m-auto lg:w-3/5 mt-10 mb-5">
        <details className="dropdown">
          <summary className="border-2  rounded-md p-2 m-1">
            Filter Jobs
          </summary>
          <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
            <li
              onClick={() => handleFilter("all_jobs")}
              className="m-1 hover:bg-gray-200 rounded-md p-2 text-black"
            >
              All Jobs
            </li>
            <li
              onClick={() => handleFilter("full_time")}
              className="m-1 hover:bg-gray-200 rounded-md p-2 text-black"
            >
              Full-Time
            </li>
            <li
              onClick={() => handleFilter("remote")}
              className="m-1 hover:bg-gray-200 rounded-md p-2 text-black"
            >
              Remote
            </li>
            <li
              onClick={() => handleFilter("part_time")}
              className="m-1 hover:bg-gray-200 rounded-md p-2 text-black"
            >
              Part-time
            </li>
            <li
              onClick={() => handleFilter("contract")}
              className="m-1 hover:bg-gray-200 rounded-md p-2 text-black"
            >
              Contract
            </li>
          </ul>
        </details>
      </div>
      <hr className="mx-10" />
      <div className="w-3/5 m-auto mt-5">
        {filterJob.map((apply) => (
          <Jobs key={apply.id} jobsList={apply} styled={styled}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
