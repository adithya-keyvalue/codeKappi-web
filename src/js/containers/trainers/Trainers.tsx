import React from "react";
import "chart.js/auto";
import TrainerCard from "../../components/Trainers/trainerCard";
import TeamsCard from "../../components/Trainers/teamsCard";
import WorkingToday from "../../components/Trainers/workingToday";

const users = [
  {
    name: "Warren Klocko",
    designation: "Cardio",
    noOfClients: 23,
    avatarUrl:
      "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Jermaine Ebert",
    designation: "General Trainer",
    noOfClients: 35,
    avatarUrl:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  {
    name: "Gustavo McGlynn",
    designation: "Yoga",
    noOfClients: 11,
    avatarUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  },
  {
    name: "Orlando Lakin",
    designation: "Zumba",
    noOfClients: 8,
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    name: "Rogelio West",
    designation: "Weights",
    noOfClients: 18,
    avatarUrl:
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Ruben Ankunding",
    designation: "Fitness",
    noOfClients: 45,
    avatarUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];

const teams = {
  totalTrainers: 12,
  totalAdmins: 2,
  totalCleaningStaff: 2,
};

const working = {
  personalTrainers: 12,
  generalTrainers: 2,
  admin: 1,
  cleaning: 1,
};

const Trainers = () => {
  return (
    <div className="ml-4 pl-8 pr-[72px]">
      <div className="text-xl text-white  pt-11">Personal Trainers</div>
      <div className=" pt-8  flex justify-between">
        <div>
          <div className="w-[73%] flex flex-wrap justify-between gap-3">
            {users.map((user) => {
              return (
                <div>
                  <TrainerCard user={user} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[30%]">
          <TeamsCard teams={teams} />
          <div className="pt-4">
            <WorkingToday working={working} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
