import React from "react";
import NavBarButton from "./navBarButton";

const NavBar = () => {
  const NavArray = [
    {
      path: "/analytics",
      title: "Analytics",
    },
    {
      path: "/members",
      title: "Members",
    },
    {
      path: "/equipments",
      title: "Equipments",
    },
    {
      path: "/trainers",
      title: "Trainers",
    },
  ];

  return (
    <div className="fixed h-full w-[200px] z-50 bg-[#222338] text-white flex flex-col font-[poppins]">
      <div className="pb-5 flex justify-center items-center pt-12">
        <img src="/icons/beyondFit.svg" alt="BF" className="w-[85%]" />
      </div>
      {NavArray.map((nav) => (
        <NavBarButton path={nav.path} title={nav.title} />
      ))}
    </div>
  );
};

export default NavBar;
