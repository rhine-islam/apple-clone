import { ReactNode, useState } from "react";
import images from "../utls/images";
import "./style.css";
interface Props {
  rightToLeft: boolean;
  leftToRight: boolean;
  topToBottom: boolean;
  bottomToTop: boolean;
  componentFront: ReactNode;
  componentBack: ReactNode;
}

const FlipCard = ({
  rightToLeft,
  leftToRight,
  topToBottom,
  bottomToTop,
  componentFront,
  componentBack,
}: Props) => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <div
        className={`transition-all duration-500 animate-fade  ${
          open
            ? "backdrop fixed inset-0 z-0 outline-none justify-center items-center flex overflow-hidden"
            : "overflow-x-hidden overflow-y-auto fixed inset-0 z-0 outline-none justify-center items-center flex"
        }`}
      />
      <div className={`flex flex-col justify-center `}>
        <div className={`group h-[500px] w-96 [perspective:1000px] z-10 `}>
          <div
            className={`relative w-full h-full shadow-xl rounded-xl [transform-style:preserve-3d] transition-all duration-1000 ${
              open
                ? rightToLeft === true &&
                  leftToRight === false &&
                  topToBottom === false &&
                  bottomToTop === false
                  ? "[transform:rotateY(-180deg)]"
                  : rightToLeft === false &&
                    leftToRight === true &&
                    topToBottom === false &&
                    bottomToTop === false
                  ? "[transform:rotateY(180deg)]"
                  : rightToLeft === false &&
                    leftToRight === false &&
                    topToBottom === true &&
                    bottomToTop === false
                  ? "[transform:rotateX(-180deg)]"
                  : rightToLeft === false &&
                    leftToRight === false &&
                    topToBottom === false &&
                    bottomToTop === true
                  ? "[transform:rotateX(180deg)]"
                  : null
                : null
            }`}
          >
            <div
              className="absolute inset-0 w-full text-center bg-white rounded-xl ps-12 text-slate-200"
              onClick={() => setopen(false)}
            >
              {componentBack}
            </div>
            <div
              className="absolute inset-0  [backface-visibility:hidden]"
              onClick={() => setopen(true)}
            >
              {componentFront}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
