import React from "react";
import MembersCard from "../../components/Members/MembersCard";
import SearchBar from "../../components/Equipments/searchBar";

const Members = () => {
  const MembersDetails = [
    {
      name: "Rebecca Newman",
      remainingMonths: 3,
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Chris Martin",
      remainingMonths: 15,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Leland West",
      remainingMonths: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Percy Wintheiser",
      remainingMonths: 9,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Jon Hammes",
      remainingMonths: 12,
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80",
    },
    {
      name: "Irving Schaefer",
      remainingMonths: 3,
      image:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
    },
    {
      name: "Donna Schumm",
      remainingMonths: 11,
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80",
    },
    {
      name: "Erik Dibbert",
      remainingMonths: 3,
      image:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80",
    },
    {
      name: "Norma Beatty",
      remainingMonths: 7,
      image:
        "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Lloyd Weissnat",
      remainingMonths: 21,
      image:
        "https://images.unsplash.com/photo-1521252659862-eec69941b071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
    },
    {
      name: "Olivia Goldner",
      remainingMonths: 9,
      image:
        "https://images.unsplash.com/photo-1544435253-f0ead49638fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Rebecca Newman",
      remainingMonths: 14,
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80",
    },
    {
      name: "Renee Funk",
      remainingMonths: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
  ];
  return (
    <div className="pl-12 pr-[72px] pt-5">
      <div className="flex gap-6 justify-start items-center w-[60%]">
        <div className="text-white font-semibold text-[20px]">Members</div>
        <SearchBar placeHolder="Search Employees" />
      </div>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 w-[60%]">
          {MembersDetails.map((member) => (
            <MembersCard details={member} />
          ))}
        </div>
        <div className="flex gap-12 flex-col">
          <div className="bg-[#222338] rounded-xl pl-7 pt-6 pr-9 pb-9 flex-col items-start">
            <div className="text-white font-bold">Todays' Statistics</div>
            <div className="text-sm flex justify-between text-white pt-5">
              <span className="font-medium">Attendence</span>
              <span className="font-bold">300</span>
            </div>
          </div>
          <div className="bg-[#222338] rounded-xl pl-5 py-8 pr-11 flex-col items-start">
            <div className="text-white font-bold">Members</div>
            <div className="flex gap-7 pt-7">
              <img
                src="/icons/tt.svg"
                alt="Avatar"
                className="rounded-full h-8 w-8"
              />
              <div className="flex flex-col text-white">
                <span className="text-sm font-medium">Total Members</span>
                <span className="text-sm font-bold">512</span>
              </div>
            </div>
            <div className="flex gap-7 pt-7">
              <img
                src="/icons/ta.svg"
                alt="Avatar"
                className="rounded-full h-8 w-8"
              ></img>
              <div className="flex flex-col text-white">
                <span className="text-sm font-medium">Members with PT</span>
                <span className="text-sm font-bold">117</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
