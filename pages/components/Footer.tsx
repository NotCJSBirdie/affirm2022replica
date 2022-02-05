import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer id={styles.footerbody} className="body-font text-black">
        <div className="my-12 mx-6 flex flex-col items-center border-t-2 border-black py-8 md:mx-16 md:flex-row">
          <div className="flex w-full flex-col items-start md:w-1/2">
            <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
              <span id={styles.footertitle} className="text-3xl font-bold">
                AFFIRM
              </span>
            </a>

            <p className="m-0 mt-36 flex flex-row">
              <button className="mr-4 rounded-full bg-purple-700 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-instagram"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </button>

              <button className="mr-4 rounded-full bg-purple-700 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-linkedin"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </button>

              <button className="mr-4 rounded-full bg-purple-700 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </button>

              <button className="mr-4 rounded-full bg-purple-700 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-pinterest"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="8" y1="20" x2="12" y2="11" />
                  <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </button>

              <button className="mr-4 rounded-full bg-purple-700 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </button>
            </p>
          </div>

          <div className="flex w-full flex-col items-end text-xl md:w-1/2">
            <div className="my-6 flex w-full flex-col md:m-0 md:flex-row">
              <div className="w-full ">
                <h2 className="title-font mb-3 font-bold tracking-widest text-black">
                  CONSUMERS
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-black">How it works</a>
                  </li>
                  <li>
                    <a className="text-black">Debit+</a>
                  </li>
                  <li>
                    <a className="text-black">Savings</a>
                  </li>
                  <li>
                    <a className="text-black">Help</a>
                  </li>
                </nav>
              </div>

              <div className="w-full">
                <h2 className="title-font mb-3 font-bold tracking-widest text-black">
                  BUSINESSES
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-black">Get started</a>
                  </li>
                  <li>
                    <a className="text-black">Solutions</a>
                  </li>
                  <li>
                    <a className="text-black">For developers</a>
                  </li>
                </nav>
              </div>

              <div className="w-full">
                <h2 className="title-font mb-3 font-bold tracking-widest text-black">
                  ABOUT AFFIRM
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-black">About us</a>
                  </li>
                  <li>
                    <a className="text-black">Careers</a>
                  </li>
                  <li>
                    <a className="text-black">Investors</a>
                  </li>
                  <li>
                    <a className="text-black">Press</a>
                  </li>

                  <li>
                    <a className="text-black">Affirm Cares</a>
                  </li>

                  <li>
                    <a className="text-black">Diversity & inclusion</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-6 md:mx-16">
          <div className="my-4 flex flex-row">
            Payment options through Affirm are provided by these lending
            partners: affirm.com/lenders. Your rate will be 0–30% APR based on
            credit, and is subject to an eligibility check. Options depend on
            your purchase amount, and a down payment may be required. Affirm
            savings accounts are held with Cross River Bank, Member FDIC.
            Affirm, Inc., NMLS ID 1883087. Affirm Loan Services, LLC, NMLS ID
            1479506. California residents: Affirm Loan Services, LLC is licensed
            by the Department of Financial Protection and Innovation. Loans are
            made or arranged pursuant to California Financing Law license
            60DBO-111681.
          </div>

          <div className="mb-24 flex flex-col items-start md:flex-row md:items-center">
            <p className="mb-5 md:mr-5">Privacy</p>

            <p className="mb-5 md:mr-5">Do not sell my info</p>

            <p className="mb-5 md:mr-5">Terms</p>

            <p className="mb-5 md:mr-5">Licenses</p>

            <p className="mb-5 md:mr-5">© Affirm, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
