import React from "react";
import PenIcon from "../../icons/penIcon";
import RepairIcon from "../../icons/repairIcon";
import AppleCardIcon from "../../icons/appleCardIcon";

const ServiceCard = ({ title }: any) => {
  return (
    <div className="flex flex-col items-center shadow-xl h-52 w-96">
      {title === "Forgot Apple ID or password" ? <PenIcon /> : null}
      {title === "Apple Repair" ? <RepairIcon /> : null}
      {title === "Billing and subscriptions" ? <AppleCardIcon /> : null}
      <a href="#" className="font-semibold text-blue-700">
        {title}
      </a>
    </div>
  );
};

export default ServiceCard;
