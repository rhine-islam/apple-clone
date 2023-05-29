import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ad = () => {
  return (
    <div className="px-6 py-2 lg:mt-14 md:mt-20">
      <p className="text-center ">
        Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade
        in iPhone 11 or higher.1{" "}
        <a href="#" className="text-blue-500">
          Shop iPhone
          <FontAwesomeIcon icon={faChevronRight} className="w-4 h-3" />
        </a>
      </p>
    </div>
  );
};

export default Ad;
