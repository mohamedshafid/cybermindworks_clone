import React from "react";
import { JobCard } from "@/components";
import { jobs } from "@/constants";

const JobList = () => {
  const jobList = [...jobs, ...jobs, ...jobs];
  jobList.splice(jobList.length - 1, 1);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px]">
      {jobList.map((item, index) => (
        <JobCard
          key={index}
          job_exp={item.job_exp}
          job_img={item.job_img}
          job_title={item.job_title}
          job_desc={item.job_desc}
          job_location={item.job_location}
          job_salary={item.job_salary}
        />
      ))}
    </div>
  );
};

export default JobList;
