import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController
} from "chart.js";

ChartJs.register(CategoryScale, LinearScale, PointElement, LineController);

const TimeBased = () => {
  const data = {
    labels: ["3", "6", "9", "12", "15", "18", "22"],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#EBAF78",
        tension: 0,
      },
      {
        data: [15, 32, 53, 61, 65, 35, 60],
        fill: false,
        borderColor: "#4064FF",
        tension: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "white",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-[47%] bg-[#222338] rounded-xl p-[30px] flex flex-col justify-between">
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div className="font-bold text-xl">Time-Based Metrics:</div>
        <div className="w-2/5 rounded-[10px] px-2.5 py-2 border border-[#15BFFD] flex justify-center font-medium text-xs">
          Hourly Variations
          <img src="icons/chevron.svg" alt="dropdown" className="pl-[2px]" />
        </div>
      </div>
      <div className="pt-2">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TimeBased;
