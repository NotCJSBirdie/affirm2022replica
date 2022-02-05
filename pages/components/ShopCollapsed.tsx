import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "./css/ShopCollapsed.module.css";

const ShopCollapsed = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [arrow, setArrow]: any = useState(false);
  return (
    <div>
      <div
        className="flex flex-row  items-center font-medium text-black  active:transition-transform"
        onClick={() => setArrow(!arrow)}
      >
        <button
          className="flex w-full flex-row items-center justify-between"
          {...getToggleProps()}
        >
          <span className="mr-48 text-xl">Shop</span>
          <div>
            {arrow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-down pointer-events-auto transition-all"
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
                <polyline points="6 9 12 15 18 9" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-down pointer-events-auto -rotate-180 transition-all ease-in-out"
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
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        </button>
      </div>

      <div className="py-2">
        <section {...getCollapseProps()}>
          <h1 className="text-gray-400">WHERE TO SHOP</h1>

          <p className="my-2 text-lg">Accessories</p>
          <p className="mb-2 text-lg">Apparel</p>
          <p className="mb-2 text-lg">Auto</p>
          <p className="mb-2 text-lg">Beauty & health</p>
          <p className="mb-2 text-lg">Black-owned businesses</p>
          <p className="mb-2 text-lg">Electronics</p>
          <p className="mb-2 text-lg">Fitness & gear</p>
          <p className="mb-2 text-lg">Home & furniture</p>
          <p className="mb-2 text-lg">Luxury</p>
          <p className="mb-2 text-lg">Shoes</p>
          <p className="mb-2 text-lg">Travel</p>
          <p className="mb-2 text-lg">Wedding</p>

          <h1 className="text-gray-400">SHOPPING WITH AFFIRM</h1>

          <p className="my-2 text-lg">How it works</p>
          <p className="mb-2 text-lg">Download the app</p>
          <p className="mb-2 text-lg">Help Center</p>
          <div className="my-5 ">
            <img
              src="https://images.ctfassets.net/4rc1asww3mw7/1vY5LxWJ7VqQgJ0LDfLV4d/4495a05b12097bcaeffb1892ad5b6cfd/1x1_featured_content_Gucci__1_.jpg?w=360&h=492&q=75&fm=webp"
              alt="guccisidebar"
              className="h-1/2 w-1/2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopCollapsed;
