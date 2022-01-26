import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HowToBuy = () => {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="">
          <p className="p-32 py-72 bg-blue-400">SLIDE 1</p>
        </div>
        <div>
          <p className="p-32 py-72 bg-red-400">SLIDE 2</p>
        </div>
        <div>
          <p className="p-32 py-72 bg-green-400">SLIDE 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HowToBuy;
