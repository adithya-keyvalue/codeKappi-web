import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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

};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Weight',
      data: [80,82,85,82,81,78,73,70],
      borderColor: '#8D6AFF',
      backgroundColor: 'rgba(141,106,255,0.2)',
    },
  ],
};

export function WeightHistoryChart() {
  return <Line options={options} data={data} />;
}
