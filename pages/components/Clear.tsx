import styles from "./css/Clear.module.css";

const Clear = () => {
  return (
    <div className="px-12 py-24">
      <section id={styles.clearbackground} className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.ctfassets.net/4rc1asww3mw7/70kjj6ISPr9Qie98Q5fFeo/3dedf7ee090a38cc7845d9afefdf13b5/The_choice_is_clear_Desktop_2x.jpg?w=912&h=961&q=50&fm=webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              The choice is clear
            </h1>
            <p className="mb-8 leading-relaxed">
              Late fees? Hidden charges? Sneaky fine print? No thanks, we’ll
              leave those to the credit card companies. At Affirm, we like to
              keep it real—and that means no fees, no gotchas, and no regrets.
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
        </div>
      </section>
    </div>
  );
};

export default Clear;
