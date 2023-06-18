import { Chart } from "react-google-charts";
import Image from "next/image";
import imagen from "../images/Images/barComplem.png";

export default function MyChart() {
  const chartData = [
    ["Task", "Hours per Day"],
    ["Movies ticket", 35],
    ["Music ticket", 10],
    ["Football ticket", 55],
  ];

  const chartOptions = {
    pieHole: 0.4,
    colors: ["#13B497", "#0B6050", "#87FFE9"],
    legend: {
      position: "bottom",
      shape: "square",
    },
    backgroundColor: "#272E35",
  };

  return (
    <div className="relative w-[90%] h-0 mx-auto rounded-lg lg:w-[45%] lg:mx-[5%] ">
      <p className="absolute text-[#FFFFFF] z-10 ml-[75%] mt-[2em] text-xs lg:py-5 lg:px-0 lg:ml-[81%]">
        this week
      </p>
      <div className="absolute ml-[92.5%] z-10 mt-[2.5em] text-xs lg:py-[1.5em] lg:px-0 lg:ml-[90%]">
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
      <div className="relative mt-[2em]  ">
        <div className="rounded-xl overflow-hidden mt-10">
          <div className="bg-[#272E35] h-20"></div>
          <div className=" absolute bg-[#20262D] z-10 w-[90%] ml-[6%] -mt-[2em] h-10 rounded-xl text-[#FFFFFF] text-xs">
            <p className="mt-[0.8em] ml-2">Tuesday </p>
            <p className=" text-xs ml-[70%] -mt-[1em]">215,523pcs</p>
          </div>
          <div className="lg:-ml-[22%] lg:h-[15em]">
            <Chart
              chartType="PieChart"
              width="100%"
              height="100%"
              data={chartData}
              options={chartOptions}
            />
          </div>
          <Image
            src={imagen}
            alt=""
            className="absolute hidden lg:block -mt-[11.5em] ml-[55%]"
          />
        </div>
      </div>
      <div className="absolute -mt-[15em] text-[#FFFFFF] text-xl h-[25px] ml-[5%] lg:-mt-[15em]">
        Best Selling
      </div>
    </div>
  );
}
