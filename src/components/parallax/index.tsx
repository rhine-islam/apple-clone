import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "../Reveal";
import FlipAnimation from "../flipAnimation/flipAnimation";

const ParallaxCard = ({
  duration,
  imageOne,
  imageTwo,
  width,
  leftToRight,
  bottomToTop,
}: any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (duration === undefined || duration === null || duration === "") {
    duration = 0.7;
  }
  if (leftToRight === undefined || leftToRight === null || leftToRight === "") {
    leftToRight = false;
  }
  if (bottomToTop === undefined || bottomToTop === null || bottomToTop === "") {
    bottomToTop = false;
  }
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: duration }}
      >
        <Reveal>
          <FlipAnimation
            rightToLeft={false}
            leftToRight={leftToRight}
            topToBottom={false}
            bottomToTop={bottomToTop}
            componentFront={
              <img
                src={imageOne}
                alt="Something"
                className={`${
                  String(width).toUpperCase() === "FULL"
                    ? "w-[800px]"
                    : "w-[380px]"
                } h-[500px] rounded-2xl`}
              />
            }
            componentBack={
              <img
                src={imageTwo}
                alt="Something"
                className={`${
                  String(width).toUpperCase() === "FULL"
                    ? "w-[800px]"
                    : "w-[380px]"
                } h-[500px] `}
              />
            }
          />
        </Reveal>
      </motion.div>
    </>
  );
};

export default ParallaxCard;
