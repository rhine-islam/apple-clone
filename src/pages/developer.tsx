import React from "react";
import DevNavbar from "../components/developer/navbar/devNavbar";
import DevCard from "../components/developer/card/devCard";
import images from "../components/utls/images";

const Developer = () => {
  return (
    <div className="bg-black">
      <DevNavbar />
      <DevCard
        title="WWDC23"
        content="Get ready for June 5 at 10 a.m. PT. See Whats ahead"
        image={images.devImg1}
        color="white"
        bgColor="bg-black"
        heading={true}
        position="bottom"
      />
      <div className="grid gap-2 pt-2 md:grid-cols-2 md:px-2">
        <DevCard
          title="Latest videos"
          content="TestFlight , Privacy, MapKit & more"
          image={images.devImg10}
          color="white"
          bgColor="bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-600"
          heading={false}
          position="top"
        />
        <DevCard
          title="Xcode Cloud"
          content="Take Advantage of continuous integration & delivery, right in Xcode."
          image={images.devImg11}
          color="white"
          bgColor="bg-gradient-to-br from-sky-700 via-sky-700 to-cyan-400"
          heading={false}
          position="top"
        />
        <DevCard
          title="IOS 16"
          content=""
          image={images.devImg3}
          color="white"
          bgColor="bg-neutral-900"
          heading={false}
          position="top"
        />
        <DevCard
          title="iPadOS 16"
          content=""
          image={images.devImg4}
          color="white"
          bgColor="bg-neutral-900"
          heading={false}
          position="top"
        />
        <DevCard
          title="macOS Ventura"
          content=""
          image={images.devImg5}
          color="white"
          bgColor="bg-neutral-900"
          heading={false}
          position="top"
        />
        <DevCard
          title="watchOS 9"
          content=""
          image={images.devImg6}
          color="white"
          bgColor="bg-neutral-900"
          heading={false}
          position="top"
        />
      </div>
    </div>
  );
};

export default Developer;
