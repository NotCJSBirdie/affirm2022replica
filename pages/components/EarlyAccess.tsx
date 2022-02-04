import styles from "./css/EarlyAccess.module.css";

const EarlyAccess = () => {
  return (
    <div>
      <section className="body-font text-gray-600 md:px-12">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-full md:mb-0 md:w-2/3">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="https://images.ctfassets.net/4rc1asww3mw7/6ZCj6CRypdokc7LWCDQTKc/3a4564fca86bd9cbdeec003ede8b0725/homepage_img_v1_2x_D.png?w=1456&h=808&q=50&fm=webp"
            />
          </div>
          <div className="flex flex-col  items-center text-center md:w-1/3 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              Get early access to Debit+
            </h1>
            <p className="mb-8 leading-relaxed">
              Use the Affirm Debit+™ card for everyday shopping. Or choose to
              split eligible purchases at 0% APR in the Debit+ app. Join the
              waitlist to save your spot in line.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded-full border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
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
