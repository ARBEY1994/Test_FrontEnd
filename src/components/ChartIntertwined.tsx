import React from "react";
import Image from "next/image";
import imagen from "../images/Images/Vector 3.png";
import imagen2 from "../images/Images/Vector 4.png";

export default function ChartWave() {
  return (
    <div className=" bg-[#2F363D] h-[8em] rounded-xl hidden lg:block w-[22%] mt-[1em] ml-[5%] object-contain">
      <div className=" ">
        <p className="text-[#FFFFFF] ml-[8%] py-2 ">456,623</p>
        <p className="text-[#B7B7B7] ml-[8%] ">Income</p>
      </div>
      <p className="absolute text-[#B7B7B7] ml-[16.2%] -mt-[4.5em] text-xs">
        Monthly
      </p>
      <div className="absolute ml-[20%]  -mt-[3em]  ">
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
      <Image src={imagen} alt="image not fount" className="object-contain" />
      <Image
        src={imagen2}
        alt="image not fount"
        className="-mt-[4em] object-contain"
      />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-[#D9B75F] border-[#2F363D] border-2 lg:ml-[15%] lg:-mt-[2em]  xl:ml-[12%] xl:-mt-[3em]   "></div>
    </div>
  );
}
