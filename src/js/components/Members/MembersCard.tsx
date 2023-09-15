import React from "react";
import { useNavigate } from "react-router-dom";

const MembersCard: React.FC<{ details: any }> = ({ details }) => {
  const id = 1;
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#222338] rounded-xl p-[24px] cursor-pointer"
      onClick={() => {
        navigate(`/members/${id}`);
      }}
    >
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div className="w-[60%] flex items-center">
          <div className="pr-[8px]">
            <img
              src={details.image}
              alt="Avatar"
              className="rounded-full h-12 w-12"
            />
          </div>
          <div>
            <div className="font-medium text-[16px]">{details.name}</div>
          </div>
        </div>
        <div className="flex text-[12px]">
          <div className="text-white">{details.remainingMonths} Months remaining</div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
