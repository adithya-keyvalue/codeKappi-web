import React from "react";
import { useNavigate } from "react-router-dom";

const SpaceUtilization = () => {
  const MachineList = [
    {
      name: "Treadmill",
      image: "icons/treadmill.png",
      status: "Attention Required",
      statusBg: "rgba(255, 0, 0, 0.20)",
      textColor: "rgba(255, 0, 0)",
    },
    {
      name: "Leg Press Machine",
      image: "icons/leg.png",
      status: "Check-up",
      statusBg: "rgba(255, 153, 0, 0.20)",
      textColor: "rgba(255, 153, 0)",
    },
    {
      name: "Uni Lateral Seated Rows",
      image: "icons/uni.png",
      status: "Check-up",
      statusBg: "rgba(255, 153, 0, 0.20)",
      textColor: "rgba(255, 153, 0)",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-[47%] pl-10 pt-[30px] pr-10 pb-8 bg-[#222338] rounded-xl h-fit">
      <div className="flex justify-between font-[Inter] text-white items-center mb-5">
        <div className="font-bold text-xl">Space Utilization :</div>
        <div className="w-2/5 rounded-[10px] px-2.5 py-2 border border-[#15BFFD] flex justify-center font-medium text-xs">
          Foot Traffic Heatmap
          <img src="icons/chevron.svg" alt="dropdown" className="pl-[2px]" />
        </div>
      </div>
      <div className="font-light font-[Inter] italic leading-[17px] text-white w-2/3 pb-[30px]">
        Shows the ares which are crowded most. You can make rearrangements
        accordingly.
      </div>
      <div className="w-full flex justify-between items-start">

      <img src="icons/layout.svg" alt="layout" />
      <img src="icons/legend.svg" alt="legend" />
      </div>
    </div>
  );
};

export default SpaceUtilization;
