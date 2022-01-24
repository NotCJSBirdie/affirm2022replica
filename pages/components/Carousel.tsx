import { useState } from "react";
import styles from "./css/Carousel.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect } from "react";

const responsive = {
  0: { items: 3 },
  568: { items: 4 },
  1024: { items: 6.5 },
};

const items = [
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
  <div className="p-8 bg-blue-400 m-4 text-center">
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
    <h1 className="text-black">Hello world</h1>
  </div>,
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [leftArrow, setLeftArrow] = useState(
    <button className="p-4 bg-orange-400 invisible">
      I am a hidden button!
    </button>
  );

  const slidePrev = () => setActiveIndex(activeIndex - 1);

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    setLeftArrow(<button className="p-4 bg-orange-400">Prev</button>);
  };

  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  return (
    <div className="ml-12">
      <AliceCarousel
        mouseTracking
        disableDotsControls
        disableButtonsControls
        items={items}
        activeIndex={activeIndex}
        responsive={responsive}
        onSlideChanged={syncActiveIndex}
        infinite={false}
      />

      <div className="flex flex-row justify-between items-center bg-transparent relative bottom-36">
        <div
          onClick={slidePrev}
          className="hover:scale-110 ease-in-out transition-all active:shadow-2xl"
        >
          {leftArrow}
        </div>

        <button
          className="p-4 bg-orange-400 hover:scale-110 ease-in-out transition-all shadow-2xl"
          onClick={slideNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
