import styles from "./css/Pay.module.css";

const Pay = () => {
  return (
    <div>
      <section id={styles.paysection} className="body-font mx-4 text-black">
        <div className="container mx-auto flex flex-col items-center px-12 py-24 md:flex-row">
          <div className="mb-16 flex w-full flex-col items-start text-left md:mb-0 md:w-2/3">
            <h1 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">
              Pay on the go, wherever you go
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Download the Affirm app and discover a new way to pay over time
              almost anywhere.
            </p>
            <div className="flex justify-center">
              <div className="flex w-full flex-row items-center rounded-full bg-white py-2 shadow-2xl">
                <div className="ml-8 flex w-11/12 flex-col">
                  <span className="w-full text-left">TEXT ME THE APP</span>
                  <input
                    placeholder="Enter mobile number"
                    className="w-full outline-none"
                  ></input>
                </div>

                <div className="ml-12 mr-9 w-1/12 md:ml-32">
                  <button
                    id={styles.arrowbutton}
                    className="flex w-full flex-col items-center rounded-full py-2 px-7"
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
          <div className="w-full md:w-1/3">
            <img
              className="rounded object-cover object-center"
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
