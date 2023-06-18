import React from "react";
import Image from "next/image";
import Imagen from "../images/Images/graficaAnillo.png";
import legends from "../images/Images/legends.png";

export default function ChartRing() {
  return (
    <div className="bg-[#2F363D] w-[90%] mt-[2em] rounded-xl mx-auto lg:w-[22.5%] lg:ml-[28%] lg:-mt-[8em] lg:h-[8em]">
      <p className="absolute text-[#B7B7B7]  mt-2 ml-[16%] text-xs hidden lg:block">
        This week
      </p>
      <div className="absolute z-10 mt-[0.9em] ml-[20.5%] hidden lg:block">
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
      <Image
        className="w-[500px] mx-auto h-[176px] rounded-xl lg:w-[100px]  lg:h-[80px] lg:-ml-[0%] lg:absolute lg:mt-[1em]"
        src={Imagen}
        alt=""
      />
      <Image
        src={legends}
        alt=""
        className="hidden lg:block  ml-[7%] absolute mt-[2em] lg:w-[14%] xl:w-[12em]"
      />
    </div>
  );
}
