import React, { useState } from "react";

const Input = ({ label, inputType, text, placeholder, onChange }) => {
  // logic
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    const resultValue = label === "mbti" ? value.toUpperCase() : value;
    setValue(resultValue);
    onChange(label, resultValue);
  };

  // view
  return (
    <div className="py-2 first:pt-0 last:pb-0 ">
      <div className="relative">
        <label
          htmlFor={label}
          className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
          absolute"
        >
          {text}
        </label>
        <input
          type={inputType || "text"}
          id={label}
          name={label}
          value={value}
          placeholder={placeholder}
          className="border placeholder-gray-400 focus:outline-none
          focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-date-gray-200 rounded-2xl placeholder:text-date-gray-200"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
