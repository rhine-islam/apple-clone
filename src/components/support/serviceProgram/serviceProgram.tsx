import data from "../../../data/data";
import style from "../../../style/style";
import LinkBtn from "../../buttons/linkBtn";

const ServiceProgram = () => {
  return (
    <div className="flex flex-col items-start space-y-3">
      <h1 className={`text-black md:text-2xl font-bold text-xl`}>
        {data.servidePrograms?.title}
      </h1>
      {data.servidePrograms?.data.map((value: string, id: number) => {
        return (
          <a href="#" className="text-blue-600" key={id}>
            {value}
          </a>
        );
      })}

      <LinkBtn name="See all programs" />
    </div>
  );
};

export default ServiceProgram;
