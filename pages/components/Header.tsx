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
    <div className="z-10 fixed top-0 w-full bg-transparent">
      <header className="text-gray-600 body-font lg:grid hidden z-50 sticky">
        <div className="bg-transparent container mx-auto grid grid-cols-3 items-center px-12">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-8">
            <span className="pr-8 text-3xl">AFFIRM</span>
          </a>

          <div className="flex flex-col items-end border-0 px-3 focus:outline-none md:mt-0 col-span-2">
            <nav className=" flex flex-row text-base justify-center mx-4">
              <a
                onMouseOver={() => setShop(!shop)}
                onMouseOut={() => setShop(!shop)}
                id={styles.underline}
                className=" bg-transparent p-6 hover:text-gray-900"
              >
                Shop
              </a>

              <a
                onMouseOver={() => setWaysToPay(!waystopay)}
                onMouseOut={() => setWaysToPay(!waystopay)}
                id={styles.underline}
                className=" bg-transparent p-6 hover:text-gray-900"
              >
                Ways to pay
              </a>

              <a
                onMouseOver={() => setEarn(!earn)}
                onMouseOut={() => setEarn(!earn)}
                id={styles.underline}
                className=" bg-transparent p-6 hover:text-gray-900"
              >
                Earn
              </a>

              <a
                onMouseOver={() => setBusiness(!business)}
                onMouseOut={() => setBusiness(!business)}
                id={styles.underline}
                className="bg-transparent p-6 hover:text-gray-900"
              >
                For business
              </a>

              <a
                onMouseOver={() => setSignIn(!signin)}
                onMouseOut={() => setSignIn(!signin)}
                id={styles.underline}
                className="bg-transparent p-6 hover:text-gray-900"
              >
                Sign In
              </a>

              <a
                id={styles.underline}
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
        <div className="z-10 fixed top-0 w-full bg-white shadow-2xl">
          <header className="text-gray-600 body-font lg:grid hidden z-50 ">
            <div className="bg-transparent container mx-auto grid grid-cols-3 items-center px-12 ">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-8">
                <span className="pr-8 text-3xl">AFFIRM</span>
              </a>

              <div className="flex flex-col items-end border-0 px-3 focus:outline-none md:mt-0 col-span-2">
                <nav className=" flex flex-row text-base justify-center mx-4">
                  <a
                    onMouseOver={() => setShop(!shop)}
                    onMouseOut={() => setShop(!shop)}
                    id={styles.underline}
                    className=" bg-transparent p-6 hover:text-gray-900"
                  >
                    Shop
                  </a>

                  <a
                    onMouseOver={() => setWaysToPay(!waystopay)}
                    onMouseOut={() => setWaysToPay(!waystopay)}
                    id={styles.underline}
                    className=" bg-transparent p-6 hover:text-gray-900"
                  >
                    Ways to pay
                  </a>

                  <a
                    onMouseOver={() => setEarn(!earn)}
                    onMouseOut={() => setEarn(!earn)}
                    id={styles.underline}
                    className=" bg-transparent p-6 hover:text-gray-900"
                  >
                    Earn
                  </a>

                  <a
                    onMouseOver={() => setBusiness(!business)}
                    onMouseOut={() => setBusiness(!business)}
                    id={styles.underline}
                    className="bg-transparent p-6 hover:text-gray-900"
                  >
                    For business
                  </a>

                  <a
                    onMouseOver={() => setSignIn(!signin)}
                    onMouseOut={() => setSignIn(!signin)}
                    id={styles.underline}
                    className="bg-transparent p-6 hover:text-gray-900"
                  >
                    Sign In
                  </a>

                  <a
                    id={styles.underline}
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
    } else {
      setNavbar(
        <div className="z-10 fixed top-0 w-full bg-transparent">
          <header className="text-gray-600 body-font lg:grid hidden z-50 sticky">
            <div className="bg-transparent container mx-auto grid grid-cols-3 items-center px-12">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-8">
                <span className="pr-8 text-3xl">AFFIRM</span>
              </a>

              <div className="flex flex-col items-end border-0 px-3 focus:outline-none md:mt-0 col-span-2">
                <nav className=" flex flex-row text-base justify-center mx-4">
                  <a
                    onMouseOver={() => setShop(!shop)}
                    onMouseOut={() => setShop(!shop)}
                    id={styles.underline}
                    className=" bg-transparent p-6 hover:text-gray-900"
                  >
                    Shop
                  </a>

                  <a
                    onMouseOver={() => setWaysToPay(!waystopay)}
                    onMouseOut={() => setWaysToPay(!waystopay)}
                    id={styles.underline}
                    className=" bg-transparent p-6 hover:text-gray-900"
                  >
                    Ways to pay
                  </a>

                  <a
                    onMouseOver={() => setEarn(!earn)}
                    onMouseOut={() => setEarn(!earn)}
                    id={styles.underline}
                    className=" bg-transparent p-6 hover:text-gray-900"
                  >
                    Earn
                  </a>

                  <a
                    onMouseOver={() => setBusiness(!business)}
                    onMouseOut={() => setBusiness(!business)}
                    id={styles.underline}
                    className="bg-transparent p-6 hover:text-gray-900"
                  >
                    For business
                  </a>

                  <a
                    onMouseOver={() => setSignIn(!signin)}
                    onMouseOut={() => setSignIn(!signin)}
                    id={styles.underline}
                    className="bg-transparent p-6 hover:text-gray-900"
                  >
                    Sign In
                  </a>

                  <a
                    id={styles.underline}
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
    }
  };

  const [mobilenavbar, setMobileNavbar] = useState(
    <div className="z-10 fixed top-0 w-full bg-transparent">
      <header className="text-gray-600 body-font lg:hidden">
        <div className="container mx-auto flex p-5 flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <span className="text-3xl">AFFIRM</span>
          </a>
          <div>
            <button
              onClick={() => setSideBar(!sidebar)}
              className="inline-flex items-center bg-transparent rounded text-base md:mt-0"
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
        <div className="z-10 fixed top-0 w-full bg-white drop-shadow-2xl">
          <header className="text-gray-600 body-font lg:hidden bg-white">
            <div className="container mx-auto flex p-5 flex-row items-center justify-between">
              <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <span className="text-3xl">AFFIRM</span>
              </a>
              <div>
                <button
                  onClick={() => setSideBar(!sidebar)}
                  className="inline-flex items-center bg-transparent rounded text-base md:mt-0"
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
        <div className="z-10 fixed top-0 w-full bg-transparent">
          <header className="text-gray-600 body-font lg:hidden">
            <div className="container mx-auto flex p-5 flex-row items-center justify-between">
              <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <span className="text-3xl">AFFIRM</span>
              </a>
              <div>
                <button
                  onClick={() => setSideBar(!sidebar)}
                  className="inline-flex items-center bg-transparent rounded text-base md:mt-0"
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
        className="ease-in-out transition-all"
      >
        {shop ? (
          <div
            onMouseEnter={() => setShop(shop)}
            onMouseLeave={() => setShop(!shop)}
            className="shadow-2xl mx-56 mb-16 p-8 grid grid-cols-3 fixed bg-white z-10 top-16"
          >
            <div className="flex flex-col items-start">
              <h1>Where to shop</h1>
              <h2>Accessories</h2>
              <h2>Apparel</h2>
              <h2>Auto</h2>
              <h2>Beauty and Health</h2>
              <h2>Black-owned businesses</h2>
              <h2>Electronics</h2>
              <h2>Fitness & gear</h2>
              <h2>Home and furniture</h2>
              <h2>Luxury</h2>
              <h2>Shoes</h2>
              <h2>Travel</h2>
              <h2>Wedding</h2>
            </div>

            <div className="flex flex-col items-start">
              <h1>Shopping with Affirm</h1>
              <h2>How it works</h2>
              <h2>Download the app</h2>
              <h2>Help Center</h2>
            </div>

            <div className="flex flex-col items-start">
              <img
                className="object-cover object-center w-full h-full"
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
            className=" shadow-2xl mx-72  mb-16 p-8 grid grid-cols-2 fixed bg-white z-10 top-16"
          >
            <div className="flex flex-col items-start ">
              <h1>Paying with affirm</h1>
              <h2>How it works</h2>
              <h2>Debit + NEW</h2>
              <h2>Why Affirm?</h2>
              <h2>Help Center</h2>
            </div>

            <div className="flex flex-col items-start ">
              <img
                className="object-cover object-center w-full h-full "
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
            className="flex flex-col items-end mr-12 "
          >
            <div className="bg-white shadow-2xl w-1/2  mb-16 p-8 grid grid-cols-1 fixed  z-10 top-16">
              <div className="flex flex-col items-start">
                <h1>Paying with affirm</h1>
                <h2>How it works</h2>
                <h2>Debit + NEW</h2>
                <h2>Why Affirm?</h2>
                <h2>Help Center</h2>
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
        className="ease-in-out transition-all"
      >
        {business ? (
          <div
            onMouseEnter={() => setBusiness(business)}
            onMouseLeave={() => setBusiness(!business)}
            className="flex flex-col items-end mr-8 "
          >
            <div className="bg-white shadow-2xl mx-12  mb-16 p-8 grid grid-cols-4 gap-x-4 fixed  z-10 top-16">
              <div className="flex flex-col items-start">
                <h1>Industries</h1>
                <h2>Home & Lifestyle</h2>
                <h2>Fashion</h2>
                <h2>Auto</h2>
                <h2>Fitness & Sporting Goods</h2>
                <h2>Travel</h2>
                <h2>Other</h2>
              </div>

              <div className="flex flex-col items-start">
                <h1>Solutions</h1>
                <h2>Overview</h2>
                <h2>Increase Awareness</h2>
                <h2>Increase Consideration</h2>
                <h2>Increase Conversion</h2>
                <h2>Increase Omnichannel</h2>
              </div>

              <div className="flex flex-col items-start">
                <h1>Resources</h1>
                <h2>Marketing Toolkit</h2>
                <h2>For developers</h2>
                <h2>Blog</h2>
                <h2>Partnerships</h2>
                <h2>FAQs</h2>
              </div>

              <div className="flex flex-col items-center">
                <button className="px-12 py-4 bg-purple-700 text-white rounded-lg">
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
        className="ease-in-out transition-all "
      >
        {signin ? (
          <div
            onMouseEnter={() => setSignIn(signin)}
            onMouseLeave={() => setSignIn(!signin)}
            className="flex flex-col items-end mr-8 "
          >
            <div className="bg-white shadow-2xl mx-12 mb-16 p-8 grid grid-cols-1 w-1/3 fixed  z-10 top-16">
              <div className="flex flex-col items-center">
                <button className="bg-purple-600 py-2 px-12 text-white mb-4 rounded-lg w-full">
                  Sign In
                </button>
                <h2 className="mb-4">Create Account</h2>
                <button className="bg-purple-600 py-2 px-12 text-white mb-4 rounded-lg w-full">
                  Business sign-In
                </button>
                <h2>Business sign-up</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden">
            <h1>I am invisible</h1>
          </div>
        )}
      </div>

      <div id={styles.sidebar} className="h-full relative z-10 lg:hidden">
        {sidebar ? (
          <div className="hidden">
            <h1>I am hidden! </h1>
          </div>
        ) : (
          <div className="flex flex-row h-full relative top-20">
            <div className="flex flex-col items-start w-1/3">
              <div className=" flex flex-col bg-gray-500 opacity-25 px-72 py-4 fixed h-full">
                <button className="bg-white rounded-lg px-4 py-2 invisible">
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

            <div className="flex flex-col items-end w-2/3">
              <div className=" flex flex-col bg-white text-black px-8 py-4  fixed h-full">
                <button
                  onClick={() => setSideBar(!sidebar)}
                  className=" rounded-lg px-4 py-2 self-end"
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
