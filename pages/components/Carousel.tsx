import { useState } from "react";
import styles from "./css/Carousel.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect } from "react";

const responsive = {
  0: { items: 1.5 },
  568: { items: 3 },
  1024: { items: 5.5 },
};

const items = [
  <div
    id={styles.box1}
    className="m-4 flex flex-col items-center rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-extrabold text-white">Accessories</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box2}
    className="m-4 flex flex-col items-center rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out  hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white ">Apparel</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box3}
    className="m-4 flex h-full flex-col items-center rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white ">Auto</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box4}
    className="m-4 flex h-full flex-col items-center rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white ">Beauty & Health</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box5}
    className="m-4 flex flex-col items-center rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="pb-2 text-xl font-bold text-white">
      Black-owned businesses
    </h1>
    <div id={styles.blackowneddiv} className="py-20"></div>
  </div>,
  <div
    id={styles.box6}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Electronics</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box7}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Fitness & gear</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box8}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Home & furniture</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box9}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Luxury</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box10}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Shoes</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box11}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Travel</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box12}
    className="m-4 rounded-lg bg-blue-400 p-2 text-center transition-all ease-in-out hover:relative hover:scale-110 hover:shadow-xl"
  >
    <h1 className="text-xl font-bold text-white">Wedding</h1>
    <div className="py-24"></div>
  </div>,
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [leftArrow, setLeftArrow] = useState(
    <button className="invisible bg-orange-400 p-4">
      I am a hidden button!
    </button>
  );

  const slidePrev = () => setActiveIndex(activeIndex - 1);

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    setLeftArrow(
      <button className="rounded-full bg-white p-4 hover:bg-purple-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-left hover:stroke-white"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#6f32be"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </button>
    );
  };

  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);

  return (
    <div className="ml-12 overflow-visible">
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

      <div className="relative bottom-40 flex flex-row items-center justify-between bg-transparent">
        <div
          onClick={slidePrev}
          className="rounded-full transition-all ease-in-out hover:scale-110 active:shadow-2xl"
        >
          {leftArrow}
        </div>

        <button
          className="rounded-full bg-white p-4 shadow-2xl transition-all ease-in-out hover:scale-110 hover:bg-purple-700 hover:stroke-white"
          onClick={slideNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right hover:stroke-white"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#6f32be"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
