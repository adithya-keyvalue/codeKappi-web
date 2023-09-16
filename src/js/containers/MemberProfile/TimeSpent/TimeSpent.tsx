import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const labels = ["Sep 9", "Sep 10", "Sep 11", "Sep 12", "Sep 13"];

export const data = {
  labels,
  datasets: [
    {
      label: "Time in minutes",
      data: [72, 61, 65, 70, 47],
      borderColor: "#EBAF78",
      fill: false,
    },
  ],
};

export function TimeSpent() {
  return <Line options={options} data={data} />;
}
