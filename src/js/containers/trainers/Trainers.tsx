import React from "react";
import "chart.js/auto";
import TrainerCard from "../../components/Trainers/trainerCard";
import TeamsCard from "../../components/Trainers/teamsCard";
import WorkingToday from "../../components/Trainers/workingToday";

const users = [
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
  {
    name: "Adithya Vinod",
    designation: "Senior",
    noOfClients: 12,
    avatarUrl:
      "https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/361565287_863263738466676_1355051387126612988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_cat=100&_nc_ohc=rpVVR5nR-eAAX9wI65p&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAhqreci9_Em3G4JpzpXHosV9Ni4ptUJYIa2Kjo69a3PA&oe=65095F17&_nc_sid=ee9879",
  },
];

const teams = {
  totalTrainers: 12,
  totalAdmins: 2,
  totalCleaningStaff: 2,
};

const working= {
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
          <div className="w-[66%] flex flex-wrap justify-between gap-3">
            {users.map((user) => {
              return (
                <div>
                  <TrainerCard user={user} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
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
