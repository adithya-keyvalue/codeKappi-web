import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Analytics from "../containers/analytics/Analytics";
import NavBar from "../components/NavBar/navBar";
import Members from "../containers/Members/Members";
import MemberProfile from "../containers/MemberProfile/MemberProfile";
import Trainers from "../containers/trainers/Trainers";

const HomeLayout = () => (
  <div className="h-screen w-full bg-[#1B1C31]">
    <BrowserRouter>
      <NavBar />
      <div className="overflow-y-auto max-h-screen">
        <div className="ml-[200px] font-[poppins] pl-8 pt-12 pr-[72px]">
          <div className="flex justify-between">
            <div className="ml-4 text-2xl text-white">
              Good Morning{" "}
              <span className="font-bold text-[#15BFFD] text-3xl">
                John Doe
              </span>
            </div>
            <div className="flex gap-10">
              <img src="/icons/help-icon.svg" alt="help" />
              <img src="/icons/alert-icon.svg" alt="alert" />
              <img src="/icons/profile-dp.svg" alt="profile" />
            </div>
          </div>
        </div>
        <div className="ml-[200px] font-[poppins] pb-[100px]">
          <Routes>
            <Route path="/analytics" Component={Analytics} />
            <Route path="/members" Component={Members} />
            <Route path="/members/:id" Component={MemberProfile} />
            <Route path="/trainers" Component={Trainers} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default HomeLayout;
