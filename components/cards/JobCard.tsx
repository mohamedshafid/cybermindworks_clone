import { comp_amazon } from "@/assets";
import Image from "next/image";
import React from "react";

const JobCard = () => {
  return (
    <div className="cards">
      <div className="w-full flex items-start justify-between">
        <div className="comp_linear_gradient w-[82px] h-[82px] flex items-center justify-center rounded-[12px] border-white border-[1px]">
          <Image src={comp_amazon} alt="Company Logo" width={65} height={65} />
        </div>
        <p className="px-[10px] py-[7px] rounded-[10px] bg-tag font-[500]">
          24h Ago
        </p>
      </div>
      <h1 className="font-[700] text-[20px] mt-3">Full Stack Developer</h1>

      <div className="font-[500] text-[16px] text-Cards_info flex items-center gap-[16px] mt-3">
        <p>1-3 yr Exp</p>
        <p>Onsite</p>
        <p>12LPA</p>
      </div>

      <ul className="list-disc ml-[16px] text-Cards_desc text-[14px] font-[500] mt-3">
        <li>
          A user-friendly interface lets you browse stunning photos and videos
        </li>
        <li>
          Filter destinations based on interests and travel style, and create
          personalized
        </li>
      </ul>

      <button className="button flex items-center justify-center font-[600] w-full mt-3">Apply Now</button>
    </div>
  );
};

export default JobCard;
