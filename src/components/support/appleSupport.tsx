import React from "react";
import style from "../../style/style";
import IconCard from "./iconCard/iconCard";
import images from "../utls/images";
import ServiceCard from "./serviceCard/serviceCard";

const AppleSupport = () => {
  return (
    <section className="py-12 space-y-12">
      <h1
        className={`text-center xl:text-6xl font-semibold md:text-5xl text-4xl text-black`}
      >
        Apple Support
      </h1>
      <div className="grid grid-cols-2 space-y-6 lg:space-x-16 lg:justify-center lg:flex lg:items-center md:grid-cols-4">
        <IconCard title="iPhone" image={images.support4} />
        <IconCard title="Mac" image={images.support5} />
        <IconCard title="iPad" image={images.support3} />
        <IconCard title="Watch" image={images.support8} />
        <IconCard title="AirPods" image={images.support2} />
        <IconCard title="Music" image={images.support6} />
        <IconCard title="TV" image={images.support7} />
      </div>
      <div className="grid items-center justify-center space-y-6 lg:space-x-16 lg:justify-center lg:flex lg:items-center md:grid-cols-2 md:items-center md:justify-center md:px-16">
        <ServiceCard title="Forgot Apple ID or password" />
        <ServiceCard title="Apple Repair" />
        <ServiceCard title="Billing and subscriptions" />
      </div>
    </section>
  );
};

export default AppleSupport;
