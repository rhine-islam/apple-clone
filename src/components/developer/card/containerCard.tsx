import React from "react";

import MiniCard from "./miniCard";
import DownloadIcon from "../../icons/downloadIcon";
import DocumentationIcon from "../../icons/documentationIcon";
import PlayIcon from "../../icons/playIcon";
import ForumIcon from "../../icons/forumIcon";
import Directory from "../../directories/directory";
import Footer from "../../footer/footer";

const ContainerCard = ({ bgColor, color }: any) => {
  return (
    <div className={`${bgColor} flex flex-col  md:items-center`}>
      <div
        className={`flex justify-center flex-col items-center py-12 mt-2 space-y-16  `}
      >
        <div className="grid items-center grid-cols-2 gap-10 md:gap-20 lg:grid-cols-4 md:grid-cols-2">
          <MiniCard
            title={"Downloads"}
            content={
              "Get the latest SDKs and beta operating systems for all Apple platforms."
            }
            color={"white"}
            link={"Download resources"}
          >
            {" "}
            <DownloadIcon />
          </MiniCard>
          <MiniCard
            title={"Documentation"}
            content={
              "Browse the latest documentation including API reference, articles, and sample code."
            }
            color={"white"}
            link={"Read documentation"}
          >
            {" "}
            <DocumentationIcon />
          </MiniCard>
          <MiniCard
            title={"Videos"}
            content={
              "Learn about the latest technologies presented at Apple developer events."
            }
            color={"white"}
            link={"Watch videos"}
          >
            {" "}
            <PlayIcon />
          </MiniCard>
          <MiniCard
            title={"Forums"}
            content={
              "Ask questions and discuss development topics with Apple engineers and other developers."
            }
            color={"white"}
            link={"View forums"}
          >
            {" "}
            <ForumIcon />
          </MiniCard>
        </div>
        <hr
          className={`w-full border-gray-700 ${
            String(color).toUpperCase() === "DARK"
              ? "border-gray-700"
              : "border-gray-300"
          }`}
        />
      </div>

      <Directory color="white" />
      <Footer color="white" />
    </div>
  );
};

export default ContainerCard;
