import { useState } from "react";
import styles from "./css/Carousel.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect } from "react";

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 5.5 },
};

const items = [
  <div
    id={styles.box1}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl flex flex-col items-center"
  >
    <h1 className="text-white font-bold text-xl  ">Accessories</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box2}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl  flex flex-col items-center"
  >
    <h1 className="text-white font-bold text-xl ">Apparel</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box3}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl h-full flex flex-col items-center"
  >
    <h1 className="text-white font-bold text-xl ">Auto</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box4}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl h-full flex flex-col items-center"
  >
    <h1 className="text-white font-bold text-xl ">Beauty & Health</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box5}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl flex flex-col items-center"
  >
    <h1 className="text-white font-bold text-xl pb-2">
      Black-owned businesses
    </h1>
    <div className="py-20"></div>
  </div>,
  <div
    id={styles.box6}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Electronics</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box7}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Fitness & gear</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box8}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Home & furniture</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box9}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Luxury</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box10}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Shoes</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box11}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Travel</h1>
    <div className="py-24"></div>
  </div>,
  <div
    id={styles.box12}
    className="p-2 bg-blue-400 m-4 text-center hover:scale-110 hover:relative ease-in-out transition-all rounded-lg hover:shadow-xl"
  >
    <h1 className="text-white font-bold text-xl">Wedding</h1>
    <div className="py-24"></div>
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
    setLeftArrow(
      <button className="p-4 bg-white rounded-full hover:bg-purple-700">
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

      <div className="flex flex-row justify-between items-center bg-transparent relative bottom-40">
        <div
          onClick={slidePrev}
          className="hover:scale-110 ease-in-out transition-all active:shadow-2xl rounded-full"
        >
          {leftArrow}
        </div>

        <button
          className="p-4 bg-white hover:scale-110 ease-in-out transition-all shadow-2xl rounded-full hover:bg-purple-700 hover:stroke-white"
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
