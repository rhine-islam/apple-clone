import React from "react";
import images from "../components/utls/images";
import DevBanner from "../components/developer/banner/devBanner";
import IosIcon from "../components/icons/iosIcon";
import IpadOsIcon from "../components/icons/ipadOsIcon";
import MacOsIcons from "../components/icons/macOsIcons";
import TvOsIcon from "../components/icons/tvOsIcon";
import WatchOsIcon from "../components/icons/watchOsIcon";

const Dev = () => {
  let color = "white";
  return (
    <div>
      <DevBanner
        title={"Planning your app"}
        content={
          "If you’re new to software development for Apple platforms, get familiar with the tools and technologies you’ll use to build apps. The Apple development ecosystem provides everything you need to bring incredible apps to people around the world."
        }
        image={""}
        color={"white"}
        bgColor={"bg-gradient-to-b from-slate-500 via-slate-700 to-slate-800"}
        position={"top"}
      >
        <div className="grid grid-cols-2 py-4 gap-x-12 lg:grid-cols-5 lg:gap-x-20 md:grid-cols-3 md:gap-x-16">
          <div className="flex flex-col items-center">
            <IosIcon />
            <p
              className={`font-semibold ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              IOS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <IpadOsIcon />
            <p
              className={`font-semibold ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              iPadOS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MacOsIcons />
            <p
              className={`font-semibold ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              macOS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <TvOsIcon />
            <p
              className={`font-semibold ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              tvOS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <WatchOsIcon />
            <p
              className={`font-semibold ${
                String(color).toUpperCase() === "WHITE"
                  ? "text-white"
                  : "text-black"
              }`}
            >
              watchOS
            </p>
          </div>
        </div>
      </DevBanner>
    </div>
  );
};

export default Dev;
