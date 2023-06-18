import React from "react";

export default function ProgressBar() {
  return (
    <div className="mt-[22em] bg-[#2F363D] flex justify-center  w-[90%] ml-[5%] h-[8em] rounded-xl lg:mt-[8.5em] lg:w-[22%] xl:mt-[5em]">
      <div className="absolute mt-2">
        <p className=" text-[#FFFFFF] -ml-[8.5em] sm:-ml-[15em] md:-ml-[18em] lg:-ml-[90%] xl:-ml-[140%]">
          456 k Pcs
        </p>
        <p className="text-[#B7B7B7] -ml-[8.5em] sm:-ml-[15em] md:-ml-[18em] lg:-ml-[90%] xl:-ml-[140%]">
          Ticket
        </p>
        <p className="text-[#B7B7B7] -ml-[8.5em] sm:-ml-[15em] md:-ml-[18em] lg:-ml-[90%] xl:-ml-[140%]">
          Sold
        </p>
      </div>
      <p className="absolute text-[#B7B7B7] ml-[60%] mt-2 lg:ml-[14%] lg:text-xs">
        Dayli
      </p>
      <div className="absolute ml-[80%] z-10 mt-4 lg:ml-[18%] lg:mt-[0.9em]">
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
      <div className="w-[80%] mt-[6em] bg-gray-500 rounded-full h-2.5 dark:bg-gray-700 relative">
        <div
          className="bg-[#13B497] h-2.5 rounded-full shadow-md"
          style={{
            width: "70%",
            background: "#13B497",
            boxShadow: "0px 0px 16.7552px rgba(19, 180, 151, 0.56)",
            borderRadius: "40.8407px",
            transform: "matrix(1, 0, 0, -1, 0, 0)",
          }}
        ></div>
      </div>
    </div>
  );
}
