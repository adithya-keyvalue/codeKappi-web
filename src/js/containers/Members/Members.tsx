import React from "react";
import MembersCard from "../../components/Members/MembersCard";

const Members = () => {
  return (
    <div className="pl-8 pr-[72px] grid grid-cols-2 gap-x-8 gap-y-6">
      <MembersCard />
			<MembersCard />
			<MembersCard />
			<MembersCard />
			<MembersCard />
			<MembersCard />
    </div>
  );
};

export default Members;
