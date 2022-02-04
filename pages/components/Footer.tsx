import styles from "./css/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-black body-font">
        <div className="flex flex-col items-center md:flex-row mx-16 my-12 py-8 border-t-2 border-black">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="md:ml-4 text-3xl">AFFIRM</span>
            </a>

            <p className="mt-36 md:mx-2 m-0 flex flex-row">
              <button className="mr-4 p-2 rounded-full bg-blue-400">
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

              <button className="mr-4 p-2 rounded-full bg-blue-400">
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

              <button className="mr-4 p-2 rounded-full bg-blue-400">
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

              <button className="mr-4 p-2 rounded-full bg-blue-400">
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

              <button className="mr-4 p-2 rounded-full bg-blue-400">
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

          <div className="flex flex-col md:w-1/2 w-full items-end">
            <div className="w-full flex flex-col my-6 md:m-0 md:flex-row">
              <div className="w-full ">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  Consumers
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Debit+</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Savings</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Help</a>
                  </li>
                </nav>
              </div>

              <div className="w-full">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  Businesses
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Get started
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      For developers
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-full">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                  About Affirm
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Careers</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Investors
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800">Press</a>
                  </li>

                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Affirm Cares
                    </a>
                  </li>

                  <li>
                    <a className="text-gray-600 hover:text-gray-800">
                      Diversity & inclusion
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-16">
          <div className="flex flex-row my-4">
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

          <div className="flex flex-col items-start md:flex-row md:items-center">
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
