import data from "../../../data/data";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";
import MySupportCard1 from "./mySupportCard1";
import MySupportCard2 from "./mySupportCard2";

const MySupport = () => {
  return (
    <section className="flex flex-col items-center p-6 space-y-8 md:p-12">
      <h1
        className={`text-black text-center font-semibold lg:text-5xl md:text-4xl text-3xl`}
      >
        {data.repairs?.[1].title}
      </h1>
      <p className={`${style.txtBlack} text-lg md:px-8 lg:px-3 px-10`}>
        {data.repairs?.[1].description}
      </p>
      <LinkBtn name="Sign in to My Support" />
      <div className="space-y-8 ">
        <MySupportCard1
          title={data.repairs?.[2].title}
          description={data.repairs?.[2].description}
        />
        <MySupportCard2
          title={data.repairs?.[3].title}
          description={data.repairs?.[3].description}
        />
      </div>
      <div className="flex flex-col items-center justify-center md:w-[900px] space-y-8 text-center">
        <p className={style.txtBlack3xlSB}>{data.repairs?.[4].title}</p>
        <p
          className={`text-black text-center font-sm  md:text-lg text-sm md:px-12 lg:px-1`}
        >
          {data.repairs?.[4].description}
        </p>
      </div>
    </section>
  );
};

export default MySupport;
