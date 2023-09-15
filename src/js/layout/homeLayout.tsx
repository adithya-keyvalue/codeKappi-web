import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Analytics from "../containers/analytics/Analytics";
import NavBar from "../components/NavBar/navBar";
import Members from "../containers/Members/Members";

const HomeLayout = () => (
  <div className=" h-screen w-full bg-[#1B1C31]">
    <BrowserRouter>
      <NavBar />
      <div className="ml-[200px] font-[poppins] overflow-y-auto max-h-screen">
        <Routes>
          <Route path="/analytics" Component={Analytics} />
          <Route path="/members" Component={Members} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);

export default HomeLayout;
