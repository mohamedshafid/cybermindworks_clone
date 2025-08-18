import React from 'react'
import JobForm from './forms/JobForm';

const CreateJob = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-secondary/80 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[16px] drop-shadow-[#A9A9A940] drop-shadow-2xl flex flex-col items-center">
        <h1 className='font-[700] text-[24px]'>Create Job Opening</h1>

        <JobForm/>
      </div>
    </div>
  );
}

export default CreateJob
