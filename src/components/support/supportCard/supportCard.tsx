import React from "react";
import Card1 from "./card1/card1";
import Card2 from "./card2/card2";

const SupportCard = () => {
  return (
    <div className="px-6 md:px-2">
      <div className="flex flex-col md:grid-cols-3 md:grid">
        <div className="md:col-span-2">
          <Card1 />
        </div>
        <Card2 />
      </div>
    </div>
  );
};

export default SupportCard;
