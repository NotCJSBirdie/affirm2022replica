import styles from "./css/Hero.module.css";

const Hero = () => {
  return (
    <div>
      <section
        id={styles.herobody}
        className="text-gray-600 body-font hidden lg:flex"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Pay at your own pace
            </h1>
            <p className="mb-8 leading-relaxed">
              When you buy with Affirm, you always know exactly what you’ll owe
              and when you’ll be done paying. There are no hidden fees—not even
              late fees.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 invisible">
            <img
              className="object-cover object-center rounded"
              alt="INVISIBLE!!TRICK!"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font lg:hidden ">
        <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
              className="object-cover object-center rounded"
              alt="INVISIBLE!!TRICK!"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
