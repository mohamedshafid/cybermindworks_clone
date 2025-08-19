import React from "react";

type FormInputProps = {
  type?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  options?: string[];
};

const FormInput = ({
  type = "text",
  placeholder,
  name,
  id,
  options = [],
}: FormInputProps) => {
  switch (type) {
    case "text":
    case "email":
    case "password":
    case "number":
    case "date":
      return (
        <div>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            className="max-w-[376px] w-full placeholder:font-[500] placeholder:text-Form_placeholder"
          />
        </div>
      );
    case "textarea":
      return (
        <div>
          <textarea
            placeholder={placeholder}
            name={name}
            id={id}
            className="w-full placeholder:font-[500] placeholder:text-Form_placeholder"
            rows={5}
          />
        </div>
      );
    case "select":
      return (
        <div>
          <select
            name={name}
            id={id}
            className="max-w-[376px] w-full"
            defaultValue="" 
          >
            <option
              value=""
              disabled
              className="text-Form_placeholder font-[500]"
            >
              {placeholder || "Select an option"}
            </option>
            {options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      );
  }
};

export default FormInput;
