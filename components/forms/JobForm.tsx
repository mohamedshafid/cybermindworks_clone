import React from "react";
import FormInput from "../extras/FormInput";

const JobForm = () => {
  return (
    <form className="w-full p-4 max-w-[990px]">
      <div className="form_div">
        <label htmlFor="" className="form_label">
          Job Title
        </label>
        <FormInput />
      </div>
    </form>
  );
};

export default JobForm;
