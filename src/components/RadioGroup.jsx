import React, { useEffect, useState } from "react";

const RadioGroup = ({ items, name, defaultCheckedData, onChange }) => {
  // logic
  const [value, setValue] = useState("");

  const handleChage = (event) => {
    const { value } = event.target;
    const selectedData = items.find((item) => item.type === value);
    setValue(value);
    onChange(selectedData);
  };

  useEffect(() => {
    setValue(defaultCheckedData.type);
  }, [defaultCheckedData]);

  // view
  return (
    <div className="flex py-8">
      {items.map((item) => (
        <div key={item.id} className="w-full text-center">
          <label htmlFor={item.type} className="peer-checked:bg-red-500">
            <input
              id={item.type}
              type="radio"
              name={name}
              value={item.type}
              checked={value === item.type}
              className="hidden peer"
              onChange={handleChage}
            />
            <div className="pb-4 grayscale peer-checked:grayscale-0">
              <img
                src={`./images/${item.type}.svg`}
                alt="male"
                className="block w-3/5 mx-auto"
              />
            </div>
            <span className="w-5 h-5 inline-block align-middle rounded bg-date-gray-200 peer-checked:bg-date-blue-500">
              <i className="block w-full h-full bg-[url('../public/images/check.svg')] bg-no-repeat bg-center"></i>
            </span>
            <span className="inline-block align-middle px-2">{item.text}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
