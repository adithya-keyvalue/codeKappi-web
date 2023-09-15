import React from "react";

const EquipmentList: React.FC<{ equipment: any }> = ({ equipment }) => {
  return (
    <div className="pt-5">
      <div className="w-full rounded-3xl bg-[#222338] p-6 flex justify-between items-center">
        <span className="w-1/5">
          <img
            src={equipment.icon}
            alt={equipment.name}
            className="h-10 pl-6"
          />
        </span>
        <span className="text-white text-xl w-1/5">
          {equipment.name}{" "}
          {equipment.count ? (
            <span className="text-white/50 text-lg">{`#${equipment.count}`}</span>
          ) : null}
        </span>
        <span className="text-white text-xl w-1/5">
          {equipment.consumption.hours}<span className="text-base text-white/50">hr</span> {equipment.consumption.minutes}
          <span className="text-base text-white/50">min</span>
        </span>
        <div className="w-1/5">
          <div
            className="rounded-lg px-2 py-1 flex items-center font-semibold text-[14px] w-fit"
            style={{ background: equipment.statusBg, color: equipment.textColor }}
          >
            {equipment.status}
          </div>
        </div>
        <span className="w-1/5">
          <img src="/icons/upload.png" alt="treadmill" className="h-10 pr-6" />
        </span>
      </div>
    </div>
  );
};

export default EquipmentList;
