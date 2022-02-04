import styles from "./css/Hero.module.css";

const Hero = () => {
  return (
    <div>
      <section
        id={styles.herobody}
        className="body-font hidden px-12 text-gray-600 lg:flex"
      >
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-7xl font-medium text-gray-900">
              Pay at your own pace
            </h1>
            <p className="mb-8 leading-relaxed">
              When you buy with Affirm, you always know exactly what you’ll owe
              and when you’ll be done paying. There are no hidden fees—not even
              late fees.
            </p>
          </div>
          <div className="invisible w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              className="rounded object-cover object-center"
              alt="INVISIBLE!!TRICK!"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <section className="body-font text-gray-600 lg:hidden ">
        <div
          id={styles.mobileherotext}
          className="container mx-auto flex flex-col items-center pt-24 lg:flex-row"
        >
          <div className="flex flex-col items-center text-center md:mb-0 md:pr-16 md:text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              Pay at your own pace
            </h1>
            <p className="mb-8 leading-relaxed">
              When you buy with Affirm, you always know exactly what you’ll owe
              and when you’ll be done paying. There are no hidden fees—not even
              late fees.
            </p>
          </div>
          <div className="w-full ">
            <img
              className="rounded object-contain object-center"
              alt="INVISIBLE!!TRICK!"
              src="https://images.ctfassets.net/4rc1asww3mw7/4W8Q3GHIWBB2TwODdStL3R/64edde49d06f3bd2f50207700263f00a/Homepage_Hero_540x360px_2x-min.jpg?w=1840&q=70&fm=webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
