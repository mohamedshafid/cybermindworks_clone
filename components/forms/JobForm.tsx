"use client";

import React, { useEffect } from "react";
import FormInput from "../extras/FormInput";
import Image from "next/image";
import { draft_arrow, publish_arrow } from "@/assets";
import { useAppContext } from "@/hooks/useAppContext";

const JobForm = () => {
  const { formRef } = useAppContext();

  return (
    <form
      className="w-full p-4 max-w-[990px] flex flex-col gap-[6px]"
      ref={formRef}
    >
      <div className="flex items-center gap-[16px]">
        <div className="form_div flex-1">
          <label htmlFor="job_title" className="form_label">
            Job Title
          </label>
          <FormInput
            type="text"
            placeholder="Full Stack Developer"
            name={"job_title"}
            id={"job_title"}
          />
        </div>
        <div className="form_div flex-1">
          <label htmlFor="company_name" className="form_label">
            Company Name
          </label>
          <FormInput
            type="text"
            placeholder="Amazon, Microsoft, Swiggy"
            name={"company_name"}
            id={"company_name"}
          />
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <div className="form_div flex-1">
          <label htmlFor="location" className="form_label">
            Location
          </label>
          <FormInput
            placeholder="Choose Preferred Location"
            name="location"
            id="location"
            type="select"
            options={["Chennai", "Bangalore", "Hyderabad"]}
          />
        </div>

        <div className="form_div flex-1">
          <label htmlFor="job_type" className="form_label">
            Job Type
          </label>
          <FormInput
            placeholder="FullTime"
            name="job_type"
            id="job_type"
            type="select"
            options={["FullTime", "PartTime", "Contract"]}
          />
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <div className="form_div flex-1">
          <label htmlFor="min_salary" className="form_label">
            Salary Range
          </label>
          <div className="flex items-center gap-[8px]">
            <FormInput
              placeholder="₹0"
              id="min_salary"
              name="min_salary"
              type="text"
            />
            <FormInput
              placeholder="₹12,00,000"
              id="max_salary"
              name="max_salary"
              type="text"
            />
          </div>
        </div>

        <div className="form_div flex-1">
          <label htmlFor="application_deadline" className="form_label">
            Applicatin DeadLine
          </label>
          <FormInput
            type="date"
            id="application_deadline"
            name="application_deadline"
            placeholder="Choose Application Deadline"
          />
        </div>
      </div>

      <div className="form_div">
        <label htmlFor="" className="form_label">
          Job Description
        </label>
        <FormInput
          placeholder="Please share a description to let the candidate know more about the job role"
          id="job_description"
          name="job_description"
          type="textarea"
        />
      </div>

      <div className="flex items-center justify-between mt-[20px]">
        <button className="flex items-center justify-center text-[20px] font-[600] text-Range_input px-[60px] py-[16px] border-[1.5px] border-Range_input rounded-[10px]">
          Save Draft
          <Image
            src={draft_arrow}
            className="w-[8px] h-[10px] ml-2 "
            alt="Draft Arrow"
          />
        </button>
        <button className="flex items-center justify-center text-[20px] font-[600] text-white px-[60px] py-[16px]  rounded-[10px] bg-button">
          Publish
          <Image
            src={publish_arrow}
            className="w-[8px] h-[10px] ml-2 "
            alt="Draft Arrow"
          />
        </button>
      </div>
    </form>
  );
};

export default JobForm;
