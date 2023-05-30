import DevNavbar from "../components/developer/navbar/devNavbar";
import DevCard from "../components/developer/card/devCard";
import images from "../components/utls/images";
import DevBanner from "../components/developer/banner/devBanner";
import IosIcon from "../components/icons/iosIcon";
import IpadOsIcon from "../components/icons/ipadOsIcon";
import MacOsIcons from "../components/icons/macOsIcons";
import TvOsIcon from "../components/icons/tvOsIcon";
import WatchOsIcon from "../components/icons/watchOsIcon";
import MembersIcons from "../components/icons/membersIcons";
import MiniCard from "../components/developer/card/miniCard";
import ContainerCard from "../components/developer/card/containerCard";
import { useEffect, useState } from "react";

const Developer = ({ theme }: any) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    if (String(theme).toUpperCase() === "DARK") {
      setColor("white");
    } else {
      setColor("dark");
    }
  });
  return (
    <div
      className={`${
        String(theme).toUpperCase() === "DARK" ? "bg-black" : "bg-white"
      }`}
    >
      <DevNavbar />
      {/* <DevCard
        title="WWDC23"
        content="Get ready for June 5 at 10 a.m. PT. See Whats ahead"
        image={images.devImg1}
        color={"white"}
        bgColor="bg-black"
        heading={true}
        position="bottom"
      />
      <div className="grid gap-2 pt-2 md:grid-cols-2 md:px-2">
        <DevCard
          title="Latest videos"
          content="TestFlight , Privacy, MapKit & more"
          image={images.devImg10}
          color={"white"}
          bgColor="bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-600"
          heading={false}
          position="top"
        />
        <DevCard
          title="Xcode Cloud"
          content="Take Advantage of continuous integration & delivery, right in Xcode."
          image={images.devImg11}
          color={"white"}
          bgColor="bg-gradient-to-br from-sky-700 via-sky-700 to-cyan-400"
          heading={false}
          position="top"
        />
        <DevCard
          title="IOS 16"
          content=""
          image={images.devImg3}
          color={color}
          bgColor={
            String(theme).toUpperCase() === "DARK"
              ? "bg-neutral-900"
              : "bg-white"
          }
          heading={false}
          position="top"
        />
        <DevCard
          title="iPadOS 16"
          content=""
          image={images.devImg4}
          color={color}
          bgColor={
            String(theme).toUpperCase() === "DARK"
              ? "bg-neutral-900"
              : "bg-white"
          }
          heading={false}
          position="top"
        />
        <DevCard
          title="macOS Ventura"
          content=""
          image={images.devImg5}
          color={color}
          bgColor={
            String(theme).toUpperCase() === "DARK"
              ? "bg-neutral-900"
              : "bg-white"
          }
          heading={false}
          position="top"
        />
        <DevCard
          title="watchOS 9"
          content=""
          image={images.devImg6}
          color={color}
          bgColor={
            String(theme).toUpperCase() === "DARK"
              ? "bg-neutral-900"
              : "bg-white"
          }
          heading={false}
          position="top"
        />
      </div>
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
          <MiniCard title={"IOS"} content={""} color={"white"} link={""}>
            {" "}
            <IosIcon />{" "}
          </MiniCard>
          <MiniCard title={"iPadOS"} content={""} color={"white"} link={""}>
            {" "}
            <IpadOsIcon />{" "}
          </MiniCard>
          <MiniCard title={"macOS"} content={""} color={"white"} link={""}>
            {" "}
            <MacOsIcons />{" "}
          </MiniCard>
          <MiniCard title={"tvOS"} content={""} color={"white"} link={""}>
            {" "}
            <TvOsIcon />{" "}
          </MiniCard>
          <MiniCard title={"watchOS"} content={""} color={"white"} link={""}>
            {" "}
            <WatchOsIcon />{" "}
          </MiniCard>
        </div>
      </DevBanner>
      <DevBanner
        title={"Build apps. Build your future."}
        content={
          "Whether you’re just entering the workforce or you‘re an experienced developer or entrepreneur, take advantage of free resources to gain skills that help you succeed in Apple’s growing app economy, which provides millions of jobs in technology across the globe."
        }
        image={""}
        color={"white"}
        bgColor={"bg-gradient-to-b from-blue-900 via-blue-900 to-sky-500"}
        position={"top"}
      >
        <img src={images.devImg9} alt={images.devImg9} />
      </DevBanner>
      <DevBanner
        title={"Apple Developer Program"}
        content={
          "Whether you’re just entering the workforce or you‘re an experienced developer or entrepreneur, take advantage of free resources to gain skills that help you succeed in Apple’s growing app economy, which provides millions of jobs in technology across the globe."
        }
        image={""}
        color={"white"}
        bgColor={"bg-gradient-to-br from-pink-600 via-violet-700 to-violet-900"}
        position={"bottom"}
      >
        <div className="absolute">
          <MembersIcons />
        </div>
      </DevBanner>
      <ContainerCard
        bgColor={
          String(theme).toUpperCase() === "DARK" ? "bg-zinc-900" : "bg-white"
        }
        color={color}
      /> */}
    </div>
  );
};

export default Developer;
