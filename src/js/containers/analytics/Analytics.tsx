import React from "react";
import "chart.js/auto";
import MemberMetrics from "../../components/Analytics/MemberMetrics";
import EquipmentMetrics from "../../components/Analytics/EquipmentMetrics";
import MaintenanceAlerts from "../../components/Analytics/MaintenanceAlerts";
import TimeBased from "../../components/Analytics/TimeBased";
import SpaceUtilization from "../../components/Analytics/SpaceUtilization";
import Finances from "../../components/Analytics/Finances";

const Analytics = () => {
  return (
    <div className="pl-8 pr-[72px]">
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
      <div className="flex justify-between pt-11">
        <SpaceUtilization />
        <Finances />
      </div>
    </div>
  );
};

export default Analytics;
