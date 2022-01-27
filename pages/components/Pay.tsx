const Pay = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Pay on the go, wherever you go
            </h1>
            <p className="mb-8 leading-relaxed">
              Download the Affirm app and discover a new way to pay over time
              almost anywhere.
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
          <div className=" md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.ctfassets.net/4rc1asww3mw7/0WylE44f1po0svS6X5jGP/b43d1a701c38bd3f464e14e2e1c71948/Pay-on-the-go_UI_2x-min.png?w=2336&q=80&fm=webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pay;
