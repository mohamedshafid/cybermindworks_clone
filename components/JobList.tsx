import React from "react";
import { JobCard } from "@/components";
import { jobs } from "@/constants";

const JobList = () => {
  let jobList = [...jobs, ...jobs, ...jobs];
  // jobs.splice(jobs.length-1, 1); 

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px]">
      {jobList.map((item, index) => (
        <JobCard key={index}/>
      ))}
    </div>
  );
};

export default JobList;
