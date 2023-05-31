import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  children: any;
  autoSlide: boolean;
  autoSlideDuration: number;
}

const CarouselCard = ({
  children: slides,
  autoSlide,
  autoSlideDuration,
}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let index;
  const prev = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  const next = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideDuration);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-out `}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between ">
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          className="text-white"
          onClick={prev}
        />
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          className="text-white"
          onClick={next}
        />
      </div>
      <div className="absolute left-0 right-0 bottom-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, id: number) => {
            return (
              <div
                className={` transition-all w-2 h-2 bg-white rounded-full ${
                  currentSlide === id ? "p-1" : "opacity-50"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
