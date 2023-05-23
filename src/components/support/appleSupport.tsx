import React from "react";
import style from "../../style/style";
import IconCard from "./iconCard/iconCard";
import images from "../utls/images";
import ServiceCard from "./serviceCard/serviceCard";

const AppleSupport = () => {
  return (
    <section className="py-12 space-y-12">
      <h1 className={`${style.txtBlack6xlB} text-center`}>Apple Support</h1>
      <div className="grid grid-cols-2 space-y-6 md:space-x-16 md:justify-center md:flex">
        <IconCard
          title="iPhone"
          image={images.support4}
          height={24}
          width={16}
        />
        <IconCard title="Mac" image={images.support5} height={24} width={16} />
        <IconCard title="iPad" image={images.support3} height={24} width={16} />
        <IconCard
          title="Watch"
          image={images.support8}
          height={24}
          width={16}
        />
        <IconCard
          title="AirPods"
          image={images.support2}
          height={24}
          width={16}
        />
        <IconCard
          title="Music"
          image={images.support6}
          height={24}
          width={16}
        />
        <IconCard title="TV" image={images.support7} height={24} width={16} />
      </div>
      <div className="flex flex-col items-center space-y-10 md:space-x-8 md:justify-center md:flex-row md:space-y-2">
        <ServiceCard title="Forgot Apple ID or password" />
        <ServiceCard title="Apple Repair" />
        <ServiceCard title="Billing and subscriptions" />
      </div>
    </section>
  );
};

export default AppleSupport;
