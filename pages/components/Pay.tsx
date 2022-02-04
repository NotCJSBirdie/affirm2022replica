import styles from "./css/Pay.module.css";

const Pay = () => {
  return (
    <div>
      <section id={styles.paysection} className="text-black body-font mx-4">
        <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="w-full md:w-2/3 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Pay on the go, wherever you go
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Download the Affirm app and discover a new way to pay over time
              almost anywhere.
            </p>
            <div className="flex justify-center">
              <div className="flex flex-row items-center bg-white rounded-full shadow-2xl py-2 w-full">
                <div className="w-11/12 flex flex-col ml-8">
                  <span className="w-full text-left">TEXT ME THE APP</span>
                  <input
                    placeholder="Enter mobile number"
                    className="outline-none w-full"
                  ></input>
                </div>

                <div className="w-1/12 ml-12 md:ml-32 mr-9">
                  <button
                    id={styles.arrowbutton}
                    className="w-full flex flex-col items-center py-2 px-7 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-arrow-narrow-right"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ffffff"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 w-full">
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
