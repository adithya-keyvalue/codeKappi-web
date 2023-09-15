import React from "react";
import SearchBar from "../../components/Equipments/searchBar";
import EquipmentList from "../../components/Equipments/equipmentList";

const Equipments = () => {
  const EquipmentData = [
    {
      name: "Treadmill",
      count: "1",
      icon: "/icons/treadmill.png",
      consumption: { hours: "14", minutes: "32" },
      status: "Maintenance Required",
      statusBg: "rgba(255, 0, 0, 0.20)",
      textColor: "rgba(255, 0, 0)",
    },
    {
      name: "Uni Lateral Seated Rows",
      icon: "/icons/uni.png",
      consumption: { hours: "18", minutes: "29" },
      status: "Working OK",
      statusBg: "rgba(0, 255, 0, 0.20)",
      textColor: "rgba(0, 255, 0)",
    },
    {
      name: "Treadmill",
      count: "2",
      icon: "/icons/treadmill.png",
      consumption: { hours: "7", minutes: "21" },
      status: "Under Maintenance",
      statusBg: "rgba(108, 122, 137, 0.20)",
      textColor: "rgba(108, 122, 137)",
    },
    {
      name: "Treadmill",
      count: "3",
      icon: "/icons/treadmill.png",
      consumption: { hours: "11", minutes: "52" },
      status: "Working OK",
      statusBg: "rgba(0, 255, 0, 0.20)",
      textColor: "rgba(0, 255, 0)",
    },
    {
      name: "Leg Press Machine",
      count: "1",
      icon: "/icons/leg.png",
      consumption: { hours: "6", minutes: "57" },
      status: "Check Up",
      statusBg: "rgba(255, 153, 0, 0.20)",
      textColor: "rgba(255, 153, 0)",
    },
		{
      name: "Leg Press Machine",
      count: "2",
      icon: "/icons/leg.png",
      consumption: { hours: "2", minutes: "24" },
      status: "Working OK",
      statusBg: "rgba(0, 255, 0, 0.20)",
      textColor: "rgba(0, 255, 0)",
    }
  ];
  return (
    <div className="pl-12 pr-[72px] pt-5">
      <div className="flex gap-6 justify-start items-center w-[60%]">
        <div className="text-white font-semibold text-[20px]">Equipments</div>
        <SearchBar placeHolder="Search Equipments" />
      </div>
      <div className="flex justify-between w-full px-10 text-white/50 pt-5">
        <span className="w-1/5">Image</span>
        <span className="w-1/5">Name</span>
        <span className="w-1/5">Usage Time</span>
        <span className="w-1/5">Operational Status</span>
        <span className="w-1/5">Warranty/Documents</span>
      </div>
      {EquipmentData.map((equipment) => (
        <EquipmentList equipment={equipment} />
      ))}
    </div>
  );
};

export default Equipments;
