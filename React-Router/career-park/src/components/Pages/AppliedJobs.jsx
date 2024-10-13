import { useEffect, useState } from "react";
import { getApplication } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom";
import Jobs from "../shared/Jobs/Jobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [application, setApplication] = useState([]);
  const [styled, setStyled] = useState(false);

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
      setStyled(true);
    }
  }, []);

  return (
    <div>
      <div className="bg-green-100 h-60 flex justify-center items-center">
        <h1 className="font-anton text-4xl">Applied Job</h1>
      </div>
      <div className="w-3/5 m-auto mt-10">
        {application.map((apply) => (
          <Jobs key={apply.id} jobsList={apply} styled={styled}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
