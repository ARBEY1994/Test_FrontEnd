import React from "react";
import vector from "../images/Images/Vector.png";
import vector1 from "../images/Images/Vector1.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[#24292E] h-[5em] ">
      <span className="material-symbols-outlined text-[#FFFFFF] text-3xl mt-[0.7em] ml-[1em]">
        menu
      </span>
      <Image
        className="absolute w-[4em] -mt-[2.5em] ml-[5em]"
        src={vector}
        alt=""
      />
      <Image
        className="absolute  w-[2.3em] -mt-[2.2em] ml-[5.7em]"
        src={vector1}
        alt=""
      />
      <div>
        <input
          className=" w-[35%] h-[3em] ml-[18%] absolute -mt-[3.2em] text-xs bg-[#1C2126] border-gray-700 border-[1px] rounded-[12px] hidden sm:hidden lg:block "
          type="text"
          placeholder=" Search here"
          style={{ caretColor: "#13B497", paddingLeft: "2%" }}
        />
        <span className="material-symbols-outlined absolute text-[#A4A4A4] -mt-[1.3em] ml-[50%] hidden lg:block">
          search
        </span>
      </div>
      <div className="hidden lg:block  absolute -mt-[2.5em] ml-[54%] bg-[#13B497] rounded-md">
        <span className="material-symbols-outlined   text-[#FFFFFF]   p-2">
          settings
        </span>
      </div>

      <div className=" bg-gray w-[2em] h-[1.8em] absolute text-2xl ml-[65%] -mt-[1.7em] bg-[#2F363D] rounded-[12px] xl:ml-[68%]">
        <span className="material-symbols-outlined text-[#13B497]  ml-3 mt-2 ">
          notifications_active
        </span>
      </div>
      <div className="hidden  bg-gray w-[2em] h-[1.8em] absolute text-2xl ml-[71%] -mt-[1.7em] bg-[#2F363D] rounded-[12px] lg:block xl:ml-[72.5%]">
        <span className="material-symbols-outlined text-[#13B497]  ml-3 mt-2">
          chat
        </span>
      </div>
      <div className="bg-gray w-[2em] h-[1.8em] absolute text-2xl ml-[77%] -mt-[1.7em] bg-[#2F363D] rounded-[12px] hidden lg:block">
        <span className="material-symbols-outlined text-[#647280] ml-3 mt-2">
          redeem
        </span>
      </div>
      <div className="absolute w-[10px] h-[10px] rounded-full bg-[#D9B75F] mx-[73%] -my-[2.6em] xs:mx-[70%] sm:mx-[67%] md:mx-[67.5%] lg:mx-[68.5%] xl:mx-[71%] 2xl:mx-[67.5%] "></div>
      <div className="absolute w-[10px] h-[10px] rounded-full bg-[#D9B75F] mx-[74.5%] -my-[2.6em] hidden lg:block  xl:mx-[75.5%] 2xl:mx-[73.5%] "></div>
      <div className="absolute w-[10px] h-[10px] rounded-full bg-[#647280] mx-[80.5%] -my-[2.6em] hidden lg:block xl:mx-[79.5%] 2xl:mx-[79.5%] "></div>
      <div className="flex">
        <div className="absolute z-10 w-[2.5em] h-[2em] bg-[#C4C4C4] ml-[80%] -mt-[2.2em] rounded-[12px] sm:ml-[83%] lg:ml-[84.5%] xl:ml-[86.5%]"></div>
        <div className="absolute  w-[2.5em]  h-[2em] bg-[#24292E] border-gray-700 border-[1px] ml-[87%] -mt-[2.2em] rounded-[12px] lg:ml-[88%] lg:w-[4em] xl:ml-[89%]">
          <p className="lg:text-xs hidden lg:block text-[#FFFFFF] mt-2 ml-2 xl:text-xs">
            David
          </p>
        </div>
      </div>
      <div className="absolute z-10 w-[13px] h-[13px] rounded-full bg-[#D9D9D9] mx-[83.5%] -my-[1.7em] sm:mx-[85%] md:mx-[84.8%] lg:mx-[85.7%] xl:mx-[87.5%] 2xl:mx-[85.4%]"></div>

      <div className="absolute z-10 w-[27px] h-[6.5px] rounded-t-full bg-[#D9D9D9] mx-[81.5%] -my-[0.7em] sm:mx-[84.3%] md:mx-[84.1%] lg:mx-[85%] xl:mx-[87%] "></div>
      <div className="absolute ml-[92.5%] -mt-[1.2em] sm:ml-[91%] md:ml-[89.5%] lg:ml-[92%] xl:mx-[92.3%]">
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
    </nav>
  );
}
