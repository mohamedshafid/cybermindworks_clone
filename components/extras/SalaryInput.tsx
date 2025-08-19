"use client";

import React, { useState } from "react";

const SalaryInput = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(80);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        {/* Track */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full" />
        {/* Active range */}
        <div
          className="absolute top-1/2 h-1 bg-black rounded-full"
          style={{
            left: `${minValue}%`,
            right: `${100 - maxValue}%`,
          }}
        />

        {/* Min slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={minValue}
          onChange={(e) => {
            const val = Math.min(Number(e.target.value), maxValue - 5);
            setMinValue(val);
          }}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none filter_input"
        />
        {/* Max slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={maxValue}
          onChange={(e) => {
            const val = Math.max(Number(e.target.value), minValue + 5);
            setMaxValue(val);
          }}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none filter_input"
        />
      </div>
    </div>
  );
};

export default SalaryInput;
