import styles from "../components/css/HowToBuy.module.css";
import Carousel from "nuka-carousel";

const HowToBuy = () => {
  return (
    <div>
      <Carousel
        heightMode="max"
        slideWidth={1}
        transitionMode="fade"
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className="ml-2 rounded-full bg-white p-2 text-black"
            onClick={previousSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left"
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
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            className="ml-2 rounded-full bg-white p-2 text-black"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
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
        )}
        defaultControlsConfig={{
          pagingDotsStyle: {
            fill: "blueviolet",
            marginLeft: "5px",
            marginRight: "5px",
            position: "relative",
            bottom: "20px",
          },
        }}
      >
        <div className="">
          <p id={styles.slide1} className="px-16 py-5">
            <section className="body-font text-gray-600">
              <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
                <div className="mb-16 flex flex-col items-start text-left md:w-1/2 md:pr-16">
                  <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-5xl">
                    How to buy with Affirm
                  </h1>

                  <div className="flex flex-row items-center">
                    <h1 className="mr-5 underline decoration-purple-700 decoration-2 underline-offset-8">
                      Step 1
                    </h1>
                    <h1 className="mr-5">Step 2</h1>
                    <h1 className="mr-5">Step 3</h1>
                  </div>

                  <h1 className="title-font my-12 text-3xl font-medium text-gray-900">
                    Go shopping
                  </h1>

                  <p className="mb-8 leading-relaxed">
                    Shop your favorite stores online or in-store and pay later
                    with Affirm. You’ll see us at checkout, or you can request a
                    virtual card in the Affirm app.
                  </p>

                  <div className="flex justify-center">
                    <button className="text-md inline-flex rounded-3xl border-2 border-purple-700 bg-purple-700 py-2 px-2 text-white">
                      Get Prequalified
                    </button>
                    <button className="text-md ml-4 inline-flex rounded-3xl border-2 border-purple-700 bg-transparent py-2 px-2 text-purple-700">
                      Learn More
                    </button>
                  </div>

                  <div className="mt-5 flex flex-row">
                    This eligibility check won't affect your credit score.
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    className="rounded object-cover object-center"
                    alt="hero"
                    src="https://images.ctfassets.net/4rc1asww3mw7/1KoZfaqewa156SZYEygRdE/85dd7ab6f3d3d9e453d6412afb0d89cd/AC_Go-shopping_2x.jpg?w=800&h=800&q=70&fm=webp"
                  />
                </div>
              </div>
            </section>
          </p>
        </div>

        <div>
          <p id={styles.slide1} className="px-16 py-5">
            <section className="body-font text-gray-600">
              <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
                <div className="mb-16 flex flex-col items-start text-left md:w-1/2 md:pr-16">
                  <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-5xl">
                    How to buy with Affirm
                  </h1>

                  <div className="flex flex-row items-center">
                    <h1 className="mr-5">Step 1</h1>
                    <h1 className="mr-5 underline decoration-purple-700 decoration-2 underline-offset-8">
                      Step 2
                    </h1>
                    <h1 className="mr-5">Step 3</h1>
                  </div>

                  <h1 className="title-font my-12 text-xl font-medium text-gray-900">
                    Choose your payment terms
                  </h1>

                  <p className="mb-8 leading-relaxed">
                    You’re in control. Pick the payment option that works for
                    you and your budget—from 4 interest-free payments every 2
                    weeks to monthly installments.
                  </p>

                  <div className="flex justify-center">
                    <button className="text-md inline-flex rounded-3xl border-2 border-purple-700 bg-purple-700 py-2 px-2 text-white">
                      Get Prequalified
                    </button>
                    <button className="text-md ml-4 inline-flex rounded-3xl border-2 border-purple-700 bg-transparent py-2 px-2 text-purple-700">
                      Learn More
                    </button>
                  </div>

                  <div className="mt-5 flex flex-row">
                    This eligibility check won't affect your credit score.
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    className="rounded object-cover object-center"
                    alt="hero"
                    src="https://images.ctfassets.net/4rc1asww3mw7/27sXoHxT5PEszFxj7bjY84/b456e5ca8cd4c56c9d4ef40f11ca2c28/AC_Payment-terms_2x.jpg?w=800&h=800&q=70&fm=webp"
                  />
                </div>
              </div>
            </section>
          </p>
        </div>

        <div>
          <p id={styles.slide1} className="px-16 py-5">
            <section className="body-font text-gray-600">
              <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
                <div className="mb-16 flex flex-col items-start text-left md:w-1/2 md:pr-16">
                  <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-5xl">
                    How to buy with Affirm
                  </h1>

                  <div className="flex flex-row items-center">
                    <h1 className="mr-5">Step 1</h1>
                    <h1 className="mr-5">Step 2</h1>
                    <h1 className="mr-5 underline decoration-purple-700 decoration-2 underline-offset-8">
                      Step 3
                    </h1>
                  </div>

                  <h1 className="title-font my-12 text-3xl font-medium text-gray-900">
                    Make your payments
                  </h1>

                  <p className="mb-8 leading-relaxed">
                    Manage your payments in the Affirm app or online, and set up
                    AutoPay so you don’t miss a payment. But if you do, you’ll
                    never pay any fees.
                  </p>

                  <div className="flex justify-center">
                    <button className="text-md inline-flex rounded-3xl border-2 border-purple-700 bg-purple-700 py-2 px-2 text-white">
                      Get Prequalified
                    </button>
                    <button className="text-md ml-4 inline-flex rounded-3xl border-2 border-purple-700 bg-transparent py-2 px-2 text-purple-700">
                      Learn More
                    </button>
                  </div>

                  <div className="mt-5 flex flex-row">
                    This eligibility check won't affect your credit score.
                  </div>
                </div>

                <div className="w-full md:w-1/2 ">
                  <img
                    className="rounded object-cover object-center"
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
