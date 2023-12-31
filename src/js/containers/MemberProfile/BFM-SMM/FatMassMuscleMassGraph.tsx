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

const labels = [
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July"
];

export const data = {
  labels,
  datasets: [
    {
      label: "BFM",
      data: [19, 18, 17, 19, 18],
      borderColor: "#EBAF78",
      fill: false
    },
    {
        label: "SMM",
        data: [20, 17, 21, 18, 22],
        borderColor: "#4064FF",
        fill: false
      },
  ],
};

export function BFM_SMM() {
  return <Line options={options} data={data} />;
}
