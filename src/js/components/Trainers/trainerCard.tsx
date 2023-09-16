import React from "react";

const TrainerCard: React.FC<{
  user: {
    name: string;
    designation: string;
    noOfClients: number;
    avatarUrl: string;
  };
}> = ({ user }) => {
  return (
    <div className="w-[454px] bg-[#222338] rounded-xl p-[24px]">
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div className="w-[354px] flex items-center">
          <div className="pr-[8px]">
            <img
              src={user.avatarUrl}
              alt="Avatar"
              className="rounded-full h-12 w-12"
            />
          </div>
          <div>
            <div className="font-medium text-[16px]">{user.name}</div>
            <div className="text-[12px]">{user.designation}</div>
          </div>
        </div>
        <div className="flex text-[18px]">
          <div className="text-gray-400">Clients&nbsp;</div>
          <div className="text-[#00FF85]">{user.noOfClients}</div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
