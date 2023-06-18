import React from "react";
import Image from "next/image";
import imagen from "../images/Images/chartBar.png";

export default function ChartBar() {
  return (
    <div className="hidden lg:block ml-[52%] w-[44%] -mt-2">
      <Image src={imagen} alt="" />
    </div>
  );
}
