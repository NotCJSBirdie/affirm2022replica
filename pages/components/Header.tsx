import { useState } from "react";
import styles from "./css/Header.module.css";
import { useEffect } from "react";
import ShopCollapsed from "./ShopCollapsed";
import WaysToPayCollapsed from "./WaysToPayCollapsed";
import EarnCollapsed from "./EarnCollapsed";
import ForBusinessCollapsed from "./ForBusinessCollapsed";
import SignInCollapsed from "./SignInCollapsed";

const Header = () => {
  const [menuIcon, setMenuIcon]: any = useState(false);

  const [shop, setShop]: any = useState(false);

  const [waystopay, setWaysToPay]: any = useState(false);

  const [earn, setEarn]: any = useState(false);

  const [business, setBusiness]: any = useState(false);

  const [signin, setSignIn]: any = useState(false);

  const [sidebar, setSideBar]: any = useState([{}]);

  const [navbar, setNavbar] = useState(
    <div className="fixed top-0 z-10 w-full bg-transparent">
      <header className="body-font sticky z-50 hidden text-black lg:grid">
        <div className="container mx-auto grid grid-cols-3 items-center bg-transparent px-12">
          <a className="title-font mb-4 flex items-center px-8 font-medium text-black md:mb-0">
            <span className="pr-8 text-3xl font-bold" id={styles.headertitle}>
              AFFIRM
            </span>
          </a>

          <div className="col-span-2 flex flex-col items-end border-0 px-3 focus:outline-none md:mt-0">
            <nav className=" mx-4 flex flex-row justify-center text-base">
              <a
                onMouseOver={() => setShop(!shop)}
                onMouseOut={() => setShop(!shop)}
                id={styles.headersection}
                className=" bg-transparent p-6"
              >
                Shop
              </a>

              <a
                onMouseOver={() => setWaysToPay(!waystopay)}
                onMouseOut={() => setWaysToPay(!waystopay)}
                id={styles.headersection}
                className=" bg-transparent p-6 hover:text-gray-900"
              >
                Ways to pay
              </a>

              <a
                onMouseOver={() => setEarn(!earn)}
                onMouseOut={() => setEarn(!earn)}
                id={styles.headersection}
                className=" bg-transparent p-6 hover:text-gray-900"
              >
                Earn
              </a>

              <a
                onMouseOver={() => setBusiness(!business)}
                onMouseOut={() => setBusiness(!business)}
                id={styles.headersection}
                className="bg-transparent p-6 hover:text-gray-900"
              >
                For business
              </a>

              <a
                onMouseOver={() => setSignIn(!signin)}
                onMouseOut={() => setSignIn(!signin)}
                id={styles.headersection}
                className="bg-transparent p-6 hover:text-gray-900"
              >
                Sign In
              </a>

              <a
                id={styles.headersection}
                className=" bg-transparent p-6 hover:text-gray-900"
              >
                Download App
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setNavbar(
        <div className="fixed top-0 z-10 w-full bg-white shadow-2xl">
          <header className="body-font z-50 hidden text-black lg:grid ">
            <div className="container mx-auto grid grid-cols-3 items-center bg-transparent px-12 ">
              <a className="title-font mb-4 flex items-center px-8 font-medium text-black md:mb-0">
                <span
                  className="pr-8 text-3xl font-bold"
                  id={styles.headertitle}
                >
                  AFFIRM
                </span>
              </a>

              <div className="col-span-2 flex flex-col items-end border-0 px-3 focus:outline-none md:mt-0">
                <nav className=" mx-4 flex flex-row justify-center text-base">
                  <a
                    onMouseOver={() => setShop(!shop)}
                    onMouseOut={() => setShop(!shop)}
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold "
                  >
                    Shop
                  </a>

                  <a
                    onMouseOver={() => setWaysToPay(!waystopay)}
                    onMouseOut={() => setWaysToPay(!waystopay)}
                    id={styles.headersection}
                    className=" bg-transparent p-6  font-bold "
                  >
                    Ways to pay
                  </a>

                  <a
                    onMouseOver={() => setEarn(!earn)}
                    onMouseOut={() => setEarn(!earn)}
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold "
                  >
                    Earn
                  </a>

                  <a
                    onMouseOver={() => setBusiness(!business)}
                    onMouseOut={() => setBusiness(!business)}
                    id={styles.headersection}
                    className="bg-transparent p-6 font-bold "
                  >
                    For business
                  </a>

                  <a
                    onMouseOver={() => setSignIn(!signin)}
                    onMouseOut={() => setSignIn(!signin)}
                    id={styles.headersection}
                    className="bg-transparent p-6 font-bold text-purple-700"
                  >
                    Sign In
                  </a>

                  <a
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold text-purple-700"
                  >
                    Download App
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </div>
      );
    } else {
      setNavbar(
        <div className="fixed top-0 z-10 w-full bg-transparent">
          <header className="body-font sticky z-50 hidden text-black lg:grid">
            <div className="container mx-auto grid grid-cols-3 items-center bg-transparent px-12">
              <a className="title-font mb-4 flex items-center px-8 font-medium text-black md:mb-0">
                <span
                  className="pr-8 text-3xl font-extrabold"
                  id={styles.headertitle}
                >
                  AFFIRM
                </span>
              </a>

              <div className="col-span-2 flex flex-col items-end border-0 px-3 focus:outline-none md:mt-0">
                <nav className=" mx-4 flex flex-row justify-center text-base">
                  <a
                    onMouseOver={() => setShop(!shop)}
                    onMouseOut={() => setShop(!shop)}
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold "
                  >
                    Shop
                  </a>

                  <a
                    onMouseOver={() => setWaysToPay(!waystopay)}
                    onMouseOut={() => setWaysToPay(!waystopay)}
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold "
                  >
                    Ways to pay
                  </a>

                  <a
                    onMouseOver={() => setEarn(!earn)}
                    onMouseOut={() => setEarn(!earn)}
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold "
                  >
                    Earn
                  </a>

                  <a
                    onMouseOver={() => setBusiness(!business)}
                    onMouseOut={() => setBusiness(!business)}
                    id={styles.headersection}
                    className="bg-transparent p-6 font-bold "
                  >
                    For business
                  </a>

                  <a
                    onMouseOver={() => setSignIn(!signin)}
                    onMouseOut={() => setSignIn(!signin)}
                    id={styles.headersection}
                    className="bg-transparent p-6 font-bold text-purple-700"
                  >
                    Sign In
                  </a>

                  <a
                    id={styles.headersection}
                    className=" bg-transparent p-6 font-bold text-purple-700"
                  >
                    Download App
                  </a>
                </nav>
              </div>
            </div>
          </header>
        </div>
      );
    }
  };

  const [mobilenavbar, setMobileNavbar] = useState(
    <div className="fixed top-0 z-10 w-full bg-transparent">
      <header className="body-font text-gray-600 lg:hidden">
        <div className="container mx-auto flex flex-row items-center justify-between p-5">
          <a className="title-font flex items-center font-medium text-gray-900 md:mb-0">
            <span className="text-3xl" id={styles.headertitle}>
              AFFIRM
            </span>
          </a>
          <div>
            <div>
              <h1 className="text-purple-700">Sign in</h1>
            </div>
            <button
              onClick={() => setSideBar(!sidebar)}
              className="inline-flex items-center rounded bg-transparent text-base md:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );

  const changeMobileNavbar = () => {
    if (window.scrollY > 100) {
      setMobileNavbar(
        <div className="fixed top-0 z-10 w-full bg-white drop-shadow-2xl">
          <header className="body-font bg-white text-gray-600 lg:hidden">
            <div className="container mx-auto flex flex-row items-center justify-between p-5">
              <a className="title-font flex items-center font-medium text-gray-900 md:mb-0">
                <span className="text-3xl font-bold" id={styles.headertitle}>
                  AFFIRM
                </span>
              </a>
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6f32be"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <h1
                    id={styles.headersections}
                    className="mr-6 text-xl font-bold text-purple-700"
                  >
                    Sign in
                  </h1>
                </div>
                <button
                  onClick={() => setSideBar(!sidebar)}
                  className="inline-flex items-center rounded bg-transparent text-base md:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
        </div>
      );
    } else {
      setMobileNavbar(
        <div className="fixed top-0 z-10 w-full bg-transparent">
          <header className="body-font text-gray-600 lg:hidden">
            <div className="container mx-auto flex flex-row items-center justify-between p-5">
              <a className="title-font flex items-center font-medium text-gray-900 md:mb-0">
                <span className="text-3xl font-bold" id={styles.headertitle}>
                  AFFIRM
                </span>
              </a>
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#6f32be"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <h1
                    id={styles.headersections}
                    className="mr-6 text-xl font-bold text-purple-700"
                  >
                    Sign in
                  </h1>
                </div>
                <button
                  onClick={() => setSideBar(!sidebar)}
                  className="inline-flex items-center rounded bg-transparent text-base md:mt-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
        </div>
      );
    }
  };

  useEffect(changeNavbar, [navbar]);

  useEffect(changeMobileNavbar, [mobilenavbar]);

  const [shopCollapse, setShopCollapse] = useState(
    <div>
      <ShopCollapsed />
    </div>
  );

  const [waysToPayCollapse, setWaysToPayCollapse] = useState(
    <div>
      <WaysToPayCollapsed />
    </div>
  );

  const [earnCollapse, setEarnCollapse] = useState(
    <div>
      <EarnCollapsed />
    </div>
  );

  const [forBusinessCollapse, setForBusinessCollapse] = useState(
    <div>
      <ForBusinessCollapsed />
    </div>
  );

  const [signInCollapse, setSignInCollapse] = useState(
    <div>
      <SignInCollapsed />
    </div>
  );

  return (
    <div id={styles.fontfamilyheader} className="h-full">
      {mobilenavbar}

      {navbar}

      <div
        onMouseLeave={() => setShop(!shop)}
        className="transition-all ease-in-out"
      >
        {shop ? (
          <div
            onMouseEnter={() => setShop(shop)}
            onMouseLeave={() => setShop(!shop)}
            className="fixed top-16 z-10 mx-56 mb-16 grid grid-cols-3 bg-white p-8 shadow-2xl"
          >
            <div className="flex flex-col items-start">
              <h1
                id={styles.headercontent}
                className="mb-2 font-bold text-gray-400"
              >
                WHERE TO SHOP
              </h1>

              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Accessories
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Apparel
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Auto
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Beauty and Health
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Black-owned businesses
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Electronics
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Fitness & gear
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Home and furniture
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Luxury
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Shoes
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Travel
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Wedding
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <h1
                id={styles.headercontent}
                className="mb-2 font-bold text-gray-400"
              >
                SHOPPING WITH AFFIRM
              </h1>

              <h2 id={styles.headercontent} className="mb-2 text-lg">
                How it works
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Download the app
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Help Center
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.ctfassets.net/4rc1asww3mw7/1vY5LxWJ7VqQgJ0LDfLV4d/4495a05b12097bcaeffb1892ad5b6cfd/1x1_featured_content_Gucci__1_.jpg?w=360&h=492&q=75&fm=webp"
                alt="gucci"
              />
            </div>
          </div>
        ) : (
          <div className="hidden">
            <h1>I am invisible</h1>
          </div>
        )}
      </div>

      <div onMouseLeave={() => setWaysToPay(!waystopay)}>
        {waystopay ? (
          <div
            onMouseEnter={() => setWaysToPay(waystopay)}
            onMouseLeave={() => setWaysToPay(!waystopay)}
            className=" fixed top-16  z-10 mx-72 mb-16 grid grid-cols-2 bg-white p-8 shadow-2xl"
          >
            <div className="flex flex-col items-start ">
              <h1
                id={styles.headercontent}
                className="mb-2 font-bold text-gray-400"
              >
                PAYING WITH AFFIRM
              </h1>

              <h2 id={styles.headercontent} className="mb-2 text-lg">
                How it works
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Debit + NEW
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Why Affirm?
              </h2>
              <h2 id={styles.headercontent} className="mb-2 text-lg">
                Help Center
              </h2>
            </div>

            <div className="flex flex-col items-start ">
              <img
                className="h-full w-full object-cover object-center "
                src="https://images.ctfassets.net/4rc1asww3mw7/6xTWwf59EaarFomi8fJEQd/841ea728dd6f317120954f6085eb4095/Featured_content_Large_Debit_.jpg?w=768&h=492&q=75&fm=webp"
                alt="waystopay"
              />
            </div>
          </div>
        ) : (
          <div className="hidden">
            <h1>I am invisible</h1>
          </div>
        )}
      </div>

      <div onMouseLeave={() => setEarn(!earn)}>
        {earn ? (
          <div
            onMouseEnter={() => setEarn(earn)}
            onMouseLeave={() => setEarn(!earn)}
            className="mr-12 flex flex-col items-end "
          >
            <div className="fixed top-16 right-48 z-10  mb-16 grid w-1/3 grid-cols-1 bg-white  p-8 shadow-2xl">
              <div className="flex flex-col items-start">
                <h1
                  id={styles.headercontent}
                  className="mb-2 font-bold text-gray-400"
                >
                  WAYS TO EARN
                </h1>

                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Affirm Savings
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Refer a friend
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Help Center
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden">
            <h1>I am invisible</h1>
          </div>
        )}
      </div>

      <div
        onMouseLeave={() => setBusiness(!business)}
        className="transition-all ease-in-out"
      >
        {business ? (
          <div
            onMouseEnter={() => setBusiness(business)}
            onMouseLeave={() => setBusiness(!business)}
            className="mr-8 flex flex-col items-end "
          >
            <div className="fixed top-16 z-10  mx-12 mb-16 grid grid-cols-4 gap-x-4 bg-white  p-8 shadow-2xl">
              <div className="flex flex-col items-start">
                <h1
                  id={styles.headercontent}
                  className="mb-2 font-bold text-gray-400"
                >
                  Industries
                </h1>

                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Home & Lifestyle
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Fashion
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Auto
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Fitness & Sporting Goods
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Travel
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Other
                </h2>
              </div>

              <div className="flex flex-col items-start">
                <h1
                  id={styles.headercontent}
                  className="mb-2 font-bold text-gray-400"
                >
                  Solutions
                </h1>

                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Overview
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Increase Awareness
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Increase Consideration
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Increase Conversion
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Increase Omnichannel
                </h2>
              </div>

              <div className="flex flex-col items-start">
                <h1
                  id={styles.headercontent}
                  className="mb-2 font-bold text-gray-400"
                >
                  Resources
                </h1>

                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Marketing Toolkit
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  For developers
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Blog
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  Partnerships
                </h2>
                <h2 id={styles.headercontent} className="mb-2 text-lg">
                  FAQs
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <button
                  id={styles.headercontent}
                  className="rounded-3xl bg-purple-700 px-12 py-2 text-white"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden">
            <h1>I am invisible</h1>
          </div>
        )}
      </div>

      <div
        onMouseLeave={() => setSignIn(!signin)}
        className="transition-all ease-in-out "
      >
        {signin ? (
          <div
            onMouseEnter={() => setSignIn(signin)}
            onMouseLeave={() => setSignIn(!signin)}
            className="mr-8 flex flex-col items-end "
          >
            <div className="fixed top-16 z-10 mx-12 mb-16 grid w-1/3 grid-cols-1 bg-white  p-8 shadow-2xl">
              <div className="flex flex-col items-center">
                <button
                  id={styles.headercontent}
                  className="mb-4 w-full rounded-3xl border-2 border-purple-700 bg-purple-700 py-2 px-12 text-white"
                >
                  Sign In
                </button>
                <h2 id={styles.headercontent} className="mb-4 text-purple-700">
                  Create Account
                </h2>
                <button
                  id={styles.headercontent}
                  className="mb-4 w-full rounded-3xl border-2 border-purple-700 bg-transparent py-2 px-12 text-purple-700"
                >
                  Business sign-In
                </button>
                <h2 id={styles.headercontent} className="text-purple-700">
                  Business sign-up
                </h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden">
            <h1>I am invisible</h1>
          </div>
        )}
      </div>

      <div id={styles.sidebar} className="relative z-10 h-full lg:hidden">
        {sidebar ? (
          <div className="hidden">
            <h1>I am hidden! </h1>
          </div>
        ) : (
          <div className="relative top-20 flex h-full flex-row">
            <div className="flex w-2/3 flex-col items-start">
              <div className=" fixed flex h-full flex-col bg-gray-500 px-72 py-4 opacity-25">
                <button className="invisible rounded-lg bg-white px-4 py-2">
                  CLOSE THE SIDEBAR
                </button>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
                <h1 className="invisible">ITEM1 </h1>
              </div>
            </div>

            <div className="flex w-full flex-col items-end">
              <div className="fixed flex h-full flex-col overflow-y-scroll bg-white px-8 py-4 text-black">
                <button
                  onClick={() => setSideBar(!sidebar)}
                  className="self-end rounded-lg py-8 pl-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-letter-x"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#000000"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="7" y1="4" x2="17" y2="20" />
                    <line x1="17" y1="4" x2="7" y2="20" />
                  </svg>
                </button>

                <div
                  id={styles.headercontent}
                  onClick={() => {
                    setWaysToPayCollapse(<div>{waysToPayCollapse}</div>);
                    setEarnCollapse(<div>{earnCollapse}</div>);
                    setForBusinessCollapse(<div>{forBusinessCollapse}</div>);
                    setSignInCollapse(<div>{signInCollapse}</div>);
                  }}
                >
                  {shopCollapse}
                </div>

                <div
                  id={styles.headercontent}
                  onClick={() => {
                    setShopCollapse(<div>{shopCollapse}</div>);
                    setEarnCollapse(<div>{earnCollapse}</div>);
                    setForBusinessCollapse(<div>{forBusinessCollapse}</div>);
                    setSignInCollapse(<div>{signInCollapse}</div>);
                  }}
                >
                  {waysToPayCollapse}
                </div>

                <div
                  id={styles.headercontent}
                  onClick={() => {
                    setShopCollapse(<div>{shopCollapse}</div>);
                    setWaysToPayCollapse(<div>{waysToPayCollapse}</div>);
                    setForBusinessCollapse(<div>{forBusinessCollapse}</div>);
                    setSignInCollapse(<div>{signInCollapse}</div>);
                  }}
                >
                  {earnCollapse}
                </div>

                <div
                  id={styles.headercontent}
                  onClick={() => {
                    setShopCollapse(<div>{shopCollapse}</div>);
                    setWaysToPayCollapse(<div>{waysToPayCollapse}</div>);
                    setEarnCollapse(<div>{earnCollapse}</div>);
                    setSignInCollapse(<div>{signInCollapse}</div>);
                  }}
                >
                  {forBusinessCollapse}
                </div>

                <div
                  id={styles.headercontent}
                  onClick={() => {
                    setShopCollapse(<div>{shopCollapse}</div>);
                    setWaysToPayCollapse(<div>{waysToPayCollapse}</div>);
                    setEarnCollapse(<div>{earnCollapse}</div>);
                    setForBusinessCollapse(<div>{forBusinessCollapse}</div>);
                  }}
                >
                  {signInCollapse}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

// hello, notes from the developer, I really need to say that when using cols-span-2 of tailwind you have to set the grid-cols to 3, so grid-cols-3 because the cols-span-2 will fill in 2 columns of the 3 column grid
