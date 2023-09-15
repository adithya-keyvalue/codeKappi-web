import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Legs", "Pec muscles", "Shoulders", "Biceps", "Triceps", "Chest"],
  datasets: [
    {
      label: "# of Votes",
      data: [17, 15, 13, 17, 12, 15],
      backgroundColor: "rgba(141,106,255,0.2)",
      borderColor: "#8D6AFF",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",

      borderWidth: 1,
    },
  ],
};

export const config = {
  elements: {
    line: {
      backgroundColor: "#777882",
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
        ticks: {
            display: false
        },
        grid: {
            color:'#777882'
        },
      angleLines: {
        display: true,
        color: "#777882",
      },
      suggestedMin: 0,
      suggestedMax: 20,
    },
  },
};

export default function MuscleGroupChart() {
  return <Radar data={data} options={config} />;
}
