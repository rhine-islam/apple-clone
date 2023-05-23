import React from "react";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";
import images from "../../utls/images";

const Privacy = () => {
  return (
    <section className="flex flex-col items-center py-12 space-y-8">
      <h1 className={`${style.txtBlack5xlSB} text-center`}>
        Take charge of your privacy
      </h1>
      <p className={`${style.txtBlack} text-lg`}>
        Join a 30-minute session at the Apple Store and learn how to protect
        your privacy on iPhone.
      </p>
      <LinkBtn name="Learn How" />
      <img
        src={images.support12}
        className="object-cover md:w-[1000px] px-12 md:px-2 rounded-3xl"
      />
    </section>
  );
};

export default Privacy;
