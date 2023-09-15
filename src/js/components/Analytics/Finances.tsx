import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Snacks', 'Membership', 'Merchandise', 'Others'],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 65, 10, 20,],
      backgroundColor: [
        'rgba(177, 192, 0, 0.8)',
        'rgba(141, 106, 255, 0.8)',
        'rgba(46, 181, 218, 0.8)',
        'rgba(235, 175, 120, .8)',
      ],
      borderColor: [
        'rgba(177, 192, 0, 1)',
        'rgba(141, 106, 255, 1)',
        'rgba(46, 181, 218, 1)',
        'rgba(235, 175, 120, 1)'
      ],
      borderWidth: 1,
    },
  ],
};


const Finances = () => {
  return (
    <div className="w-[47%] pl-10 pt-[30px] pr-10  bg-[#222338] rounded-xl h-fit">
      <div className="flex justify-between font-[Inter] text-white items-center mb-5">
        <div className="font-bold text-xl">Finances :</div>
        <div className="w-2/5 rounded-[10px] px-2.5 py-2 border border-[#15BFFD] flex justify-center font-medium text-xs">
          Revenue
          <img src="icons/chevron.svg" alt="dropdown" className="pl-[2px]" />
        </div>
      </div>
      <div className="font-light font-[Inter] italic leading-[17px] text-white w-2/3 ">
      Illustrates the distribution of revenue streams, contributing to the overall financial composition.
      </div>
      <div style={{height:'424px'}}>
      <Doughnut data={data} options={{plugins:{legend:{ position: 'right', labels: {color: '#777882'}}}}}/>;
      </div>
    </div>
  );
};

export default Finances;
