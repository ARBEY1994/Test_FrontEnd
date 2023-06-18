import React from "react";
import Navbar from "../components/navbar";
import Content from "../components/content";
import ProgresBar from "../components/progressBar";
import ChartWave from "../components/ChartWave";
import ChartRing from "../components/ChartRing";
import Slider from "../components/Slider";
import ChartBar from "@/components/ChartBar";
import ChartIntertwined from "../components/ChartIntertwined";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-[#13B497] text-sm bg bg-[#2D3339] h-10 p-2 px-[7%] hidden lg:block">
        Dashboard /
      </div>
      <Content />
      <ChartBar />
      <ProgresBar />
      <ChartWave />
      <ChartIntertwined />
      <ChartRing />
      <Slider />
    </div>
  );
}
