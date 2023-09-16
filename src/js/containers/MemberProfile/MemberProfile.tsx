import React from "react";
import TodaySWorkout from "./TodaysWorkoutComponent/components/TodaySWorkout";
import { mockData as workoutMock } from "./TodaysWorkoutComponent/mockData";

import UserProfile from "./UserProfile";

import "./styles.css";
import Anatomy from "./MusculoSkeletal";
import MuscleGroupChart from "./MussleGroupStat/MuscleGroupStatChart";
import { WeightHistoryChart } from "./WeightHistory/WeightHistoryChart";
import { CaloriesBurned } from "./BFM-SMM/FatMassMuscleMassGraph";
import { TimeSpent } from "./TimeSpent/TimeSpent";

const MemberProfile = () => {
  return (
    <div className="ml-4 pl-8 pr-[72px]">
      <div className="grid-container">
        <div className="header-panel">
          <div className="profile-card flex">
            <div className="profile-image-container">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="profile"
                className="h-12 w-12"
              />
            </div>
            <div className="profile-details text-white">
              <h2 className="profile-name">Rebecca Newman</h2>
              <p className="profile-phone font-sm">+919605259680</p>
            </div>
          </div>
        </div>
        <div className="main-panel">
          <div
            style={{ marginBottom: "12px" }}
            data-ignore="used only for top most containter width"
          >
            <UserProfile />
          </div>
          <div data-ignore="used only for top most containter width">
            <TodaySWorkout {...workoutMock} />
          </div>
        </div>
        <div className="right-panel">
          <div className="weekly-muscle-activity h-max">
            <h2 className="text-white">Weekly muscle activity</h2>
            <div className="flex justify-between">
              <div className="main-panel flex flex-col justify-between items-center">
                <div style={{ height: "224px" }}>
                  <MuscleGroupChart />
                </div>
                <div style={{ height: "200px", width: "400px" }}>
                  <WeightHistoryChart />
                </div>
              </div>
              <div className="main-panel flex flex-col justify-between items-center">
                <div
                  style={{ height: "200px", width: "400px" }}
                  className="mb-10"
                >
                  <TimeSpent />
                </div>
                <div style={{ height: "200px", width: "400px" }}>
                  <CaloriesBurned />
                </div>
              </div>
              <div className="right-panel" style={{ height: "504px" }}>
                <Anatomy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
