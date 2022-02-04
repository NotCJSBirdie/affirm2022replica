import styles from "./css/Clear.module.css";

const Clear = () => {
  return (
    <div className="px-12 py-24">
      <section id={styles.clearbackground} className="body-font text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-10 w-full md:mb-0 md:w-1/2">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="https://images.ctfassets.net/4rc1asww3mw7/70kjj6ISPr9Qie98Q5fFeo/3dedf7ee090a38cc7845d9afefdf13b5/The_choice_is_clear_Desktop_2x.jpg?w=912&h=961&q=50&fm=webp"
            />
          </div>
          <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              The choice is clear
            </h1>
            <p className="mb-8 leading-relaxed">
              Late fees? Hidden charges? Sneaky fine print? No thanks, we’ll
              leave those to the credit card companies. At Affirm, we like to
              keep it real—and that means no fees, no gotchas, and no regrets.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Button
              </button>
              <button className="ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clear;
