import React, { useState } from "react";
import "chart.js/auto";
import MemberMetrics from "../../components/Analytics/MemberMetrics";
import EquipmentMetrics from "../../components/Analytics/EquipmentMetrics";
import MaintenanceAlerts from "../../components/Analytics/MaintenanceAlerts";
import TimeBased from "../../components/Analytics/TimeBased";

const Analytics = () => {
  return (
    <div className="pl-8 pt-12 pr-[72px]">
      <div className="flex justify-between">
        <div className="ml-4 text-2xl text-white">
          Good Morning{" "}
          <span className="font-bold text-[#15BFFD] text-3xl">John Doe</span>
        </div>
        <div className="flex gap-10">
          <img src="icons/help-icon.svg" alt="help" />
          <img src="icons/alert-icon.svg" alt="alert" />
          <img src="icons/profile-dp.svg" alt="profile" />
        </div>
      </div>
      <div className="flex justify-between pt-11">
        <MemberMetrics />
        <EquipmentMetrics />
      </div>
      <div className="flex justify-between pt-11">
        <TimeBased />
        <div className="w-[47%]">
          <MaintenanceAlerts />
          <div className="bg-[#222338] rounded-xl mt-[30px] pl-4 pt-4 pr-9 pb-4 flex text-white font-['Inter'] items-start">
            <img src="icons/info-icon.svg" alt="info" />
            <span className="text-[#DCDCDC] italic pl-2.5">Tip:</span>
            <span className="text-xs italic leading-5 pt-[4px] pl-2.5">
              If you have resistance machines or equipment with a lot of moving
              parts, then you should lubricate them at least once per week.You
              can also oil and clean your barbells once per week, but most gyms
              do this once a month.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
