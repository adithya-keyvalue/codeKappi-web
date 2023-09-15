import React from "react";
import { useNavigate } from "react-router-dom";

const MaintenanceAlerts = () => {
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
    <>
      <div className="pl-10 pt-[30px] pr-10 pb-8 w-[47%] bg-[#222338] rounded-xl h-fit">
        <div className="flex justify-between font-[Inter] text-white items-center mb-5">
          <div className="font-bold text-xl">Maintenance Alerts</div>
          <button
            className="bg-VIEW_CARD px-2.5 text-white/40 font-semibold rounded-lg py-1 border border-white/10"
            onClick={() => navigate("/equipments")}
          >
            View All
          </button>
        </div>
        {MachineList.map((machine) => (
          <div className="flex justify-between pt-4 pb-[18px] pl-[18px] pr-8 border-b border-white/10">
            <div className="flex gap-6 text-white">
              <img src={machine.image} alt={machine.name} />
              <span className="text-xl leading-[28px]">{machine.name}</span>
            </div>
            <div
              className="rounded-lg px-2 py-1 flex items-center font-semibold text-[14px]"
              style={{ background: machine.statusBg, color: machine.textColor }}
            >
              {machine.status}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MaintenanceAlerts;
