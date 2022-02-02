import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HowToBuy = () => {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="">
          <p className="p-32 py-72 bg-blue-400">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
                    How to buy with Affirm
                  </h1>

                  <div className="flex flex-row items-center">
                    <h1 className="mr-5">Step 1</h1>
                    <h1 className="mr-5">Step 2</h1>
                    <h1 className="mr-5">Step 3</h1>
                  </div>

                  <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
                    Go shopping
                  </h1>

                  <p className="mb-8 leading-relaxed">
                    Shop your favorite stores online or in-store and pay later
                    with Affirm. You’ll see us at checkout, or you can request a
                    virtual card in the Affirm app.
                  </p>

                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Get Prequalified
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://images.ctfassets.net/4rc1asww3mw7/1KoZfaqewa156SZYEygRdE/85dd7ab6f3d3d9e453d6412afb0d89cd/AC_Go-shopping_2x.jpg?w=800&h=800&q=70&fm=webp"
                  />
                </div>
              </div>
            </section>
          </p>
        </div>
        <div>
          <p className="p-32 py-72 bg-red-400">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Before they sold out
                    <br className="hidden lg:inline-block" />
                    readymade gluten
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed tacos poke beard tote bag.
                    Heirloom echo park mlkshk tote bag selvage hot chicken
                    authentic tumeric truffaut hexagon try-hard chambray.
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Button
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      Button
                    </button>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://images.ctfassets.net/4rc1asww3mw7/27sXoHxT5PEszFxj7bjY84/b456e5ca8cd4c56c9d4ef40f11ca2c28/AC_Payment-terms_2x.jpg?w=800&h=800&q=70&fm=webp"
                  />
                </div>
              </div>
            </section>
          </p>
        </div>
        <div>
          <p className="p-32 py-72 bg-green-400">
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    Before they sold out
                    <br className="hidden lg:inline-block" />
                    readymade gluten
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    Copper mug try-hard pitchfork pour-over freegan heirloom
                    neutra air plant cold-pressed tacos poke beard tote bag.
                    Heirloom echo park mlkshk tote bag selvage hot chicken
                    authentic tumeric truffaut hexagon try-hard chambray.
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Button
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      Button
                    </button>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://images.ctfassets.net/4rc1asww3mw7/44bwpxWrhgXMPX8SZxJ1kr/8350e224f3d653a0b88816b4a2ab1878/AC_AutoPay_2x.jpg?w=800&h=800&q=70&fm=webp"
                  />
                </div>
              </div>
            </section>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default HowToBuy;
