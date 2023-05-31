import React from "react";
import PenIcon from "../../icons/penIcon";
import RepairIcon from "../../icons/repairIcon";
import AppleCardIcon from "../../icons/appleCardIcon";

const ServiceCard = ({ title }: any) => {
  return (
    <div
      className="flex flex-col items-center h-48 duration-300 lg:h-52 lg:w-96 md:h-48 md:w-80 w-80 rounded-3xl hover:-translate-y-1 hover:scale-110"
      style={{ boxShadow: "4.0px 8.0px 8.0px rgba(0,0,0,0.15)" }}
    >
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
