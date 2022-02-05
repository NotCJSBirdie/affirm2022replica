import styles from "./css/Clear.module.css";

const Clear = () => {
  return (
    <div className=" px-6 py-24 md:px-12">
      <section id={styles.clearbackground} className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-full md:mb-0 md:w-1/2">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="https://images.ctfassets.net/4rc1asww3mw7/70kjj6ISPr9Qie98Q5fFeo/3dedf7ee090a38cc7845d9afefdf13b5/The_choice_is_clear_Desktop_2x.jpg?w=912&h=961&q=50&fm=webp"
            />
          </div>

          <div className="flex flex-col items-start text-left md:w-1/2 md:pl-16 lg:flex-grow lg:pl-24">
            <h1
              id={styles.cleartitle}
              className="title-font mb-4 text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              The choice is clear
            </h1>

            <p id={styles.clearbody} className="mb-8 leading-relaxed">
              Late fees? Hidden charges? Sneaky fine print? No thanks, we’ll
              leave those to the credit card companies. At Affirm, we like to
              keep it real—and that means no fees, no gotchas, and no regrets.
            </p>

            <div className="mb-8 flex justify-center">
              <button
                id={styles.clearbody}
                className="inline-flex rounded-3xl border-2 border-purple-700 bg-purple-700 py-2 px-6 text-lg text-white focus:outline-none"
              >
                Get Prequalified
              </button>

              <button
                id={styles.clearbody}
                className="ml-4 inline-flex rounded-3xl border-2 border-purple-700 bg-transparent py-2 px-6 text-lg text-purple-700  focus:outline-none"
              >
                Learn More
              </button>
            </div>

            <p id={styles.clearbody} className="mb-8 leading-relaxed">
              This eligibility check won't affect your credit score.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clear;
