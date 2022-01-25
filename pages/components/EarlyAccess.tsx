import styles from "./css/EarlyAccess.module.css";

const EarlyAccess = () => {
  return (
    <div>
      <section className="text-gray-600 body-font md:px-12">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="md:w-2/3 w-full mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.ctfassets.net/4rc1asww3mw7/6ZCj6CRypdokc7LWCDQTKc/3a4564fca86bd9cbdeec003ede8b0725/homepage_img_v1_2x_D.png?w=1456&h=808&q=50&fm=webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/3  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Get early access to Debit+
            </h1>
            <p className="mb-8 leading-relaxed">
              Use the Affirm Debit+™ card for everyday shopping. Or choose to
              split eligible purchases at 0% APR in the Debit+ app. Join the
              waitlist to save your spot in line.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyAccess;
