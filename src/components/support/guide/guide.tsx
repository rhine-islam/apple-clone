import data from "../../../data/data";
import style from "../../../style/style";

import LinkBtn from "../../buttons/linkBtn";
import GiftIcon from "../../icons/giftIcon";
import ServiceProgram from "../serviceProgram/serviceProgram";

const Guide = () => {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 md:w-[1100px] gap-12 p-8">
        <div className="space-y-8 md:col-span-2">
          <h1 className={`text-black md:text-2xl font-bold text-lg`}>
            {data.guide?.[1].title}
          </h1>
          <p className={`text-black  md:text-lg text-sm`}>
            {data.guide?.[1].description}
          </p>
        </div>
        <div className="space-y-8 ">
          <GiftIcon />
          <h1 className={`text-black md:text-2xl font-bold text-lg`}>
            {data.guide?.[2].title}
          </h1>
          <p className={`text-black  md:text-lg text-sm`}>
            {data.guide?.[2].description}
          </p>
          <LinkBtn name="Learn more" />
        </div>
        <div className="md:col-span-2">
          <ServiceProgram />
        </div>
      </div>
    </div>
  );
};

export default Guide;
