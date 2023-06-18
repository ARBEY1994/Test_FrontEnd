import React from "react";

import Image from "next/image";
import imagen from "../images/Images/Vector 1.png";

export default function ChartWave() {
  return (
    <div className="mt-[2em] bg-[#2F363D] flex justify-center  w-[90%] ml-[5%] h-[8em] rounded-xl lg:w-[22%] lg:-mt-[8em] lg:ml-[28%]">
      <div className="absolute mt-2">
        <p className="text-[#FFFFFF] -ml-[8.5em] sm:-ml-[15em] md:-ml-[18em] lg:-ml-[125%] xl:-ml-[180%]">
          451,509
        </p>
        <p className="text-[#B7B7B7] -ml-[8.5em] sm:-ml-[15em] md:-ml-[18em] lg:-ml-[4em] xl:-ml-[6em]">
          Sale
        </p>
        <p className="text-[#B7B7B7] -ml-[8.5em] z-20 sm:-ml-[15em] md:-ml-[18em] lg:-ml-[6em] lg:hidden ">
          S
        </p>
      </div>
      <p className="absolute text-[#B7B7B7] ml-[50%] mt-2 lg:ml-[13.5%] lg:text-xs">
        This week
      </p>
      <div className="absolute ml-[80%] z-10 mt-[1em] lg:ml-[19%] lg:mt-[0.9em]">
        <svg
          width="9"
          height="5"
          viewBox="0 0 9 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.434655 0.521728L4.3477 4.43477L8.26074 0.521729"
            fill="#D3D6E4"
          />
        </svg>
      </div>
      <Image src={imagen} alt="image not fount" />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-[#13B497] border-[#2F363D] border-2 ml-[30%] my-[2.2em]  sm:mx-[67%] md:mx-[67.5%]  lg:mt-[3em] lg:ml-[73.5%] xl:ml-[73.5%] 2xl:mx-[67.5%] "></div>
      <div className="absolute bg-[#2B7769] text-xs text-[#FFFFFF] rounded-md rounded-l-null px-2 mt-[2em] ml-4 lg:mt-[1.5em] xl:mt-[2em]">
        451k pcs
      </div>
    </div>
  );
}
