import React from "react";
import DevCard from "../components/developer/card/devCard";
import images from "../components/utls/images";

const Dev = () => {
  return (
    <div>
      <DevCard
        title="WWDC23"
        content="Get ready for June 5 at 10 a.m. PT. See Whats ahead"
        image={images.devImg1}
        color="white"
        bgColor="bg-black"
        heading={true}
        position="top"
      />
    </div>
  );
};

export default Dev;
