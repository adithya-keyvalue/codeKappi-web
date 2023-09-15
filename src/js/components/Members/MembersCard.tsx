import React from "react";
import { useNavigate } from "react-router-dom";

const MembersCard = () => {
  const id = 1;
  const navigate = useNavigate();
  return (
    <div
      className="w-1/2 bg-[#222338] rounded-xl p-[24px] cursor-pointer"
      onClick={() => {
        navigate(`/members/${id}`);
      }}
    >
      <div className="flex justify-between font-[Inter] text-white items-center">
        <div className="w-[60%] flex items-center">
          <div className="pr-[8px]">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Avatar"
              className="rounded-full h-12 w-12"
            ></img>
          </div>
          <div>
            <div className="font-medium text-[16px]">Jessica Jane</div>
          </div>
        </div>
        <div className="flex text-[12px]">
          <div className="text-white">3 Months remaining</div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
