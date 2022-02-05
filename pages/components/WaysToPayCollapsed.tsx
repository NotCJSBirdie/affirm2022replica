import React from "react";
import useCollapse from "react-collapsed";
import { useState } from "react";
import styles from "./css/WaysToPayCollapsed.module.css";

const WaysToPayCollapsed = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [arrow, setArrow]: any = useState(false);
  return (
    <div>
      <div
        className="title-font flex flex-row items-center font-medium text-black  active:transition-transform"
        onClick={() => setArrow(!arrow)}
      >
        <button
          className="flex w-full flex-row items-center justify-between"
          {...getToggleProps()}
        >
          <span className="text-xl">Ways To Pay</span>
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
          <h1 className="text-gray-400">PAYING WITH AFFIRM</h1>

          <p className="my-2 text-lg">How it works</p>
          <p className="mb-2 text-lg">Debit+NEW</p>
          <p className="mb-2 text-lg">Why Affirm?</p>
          <p className="mb-2 text-lg">Help Center</p>
          <div className="my-5 ">
            <img
              src="https://images.ctfassets.net/4rc1asww3mw7/6xTWwf59EaarFomi8fJEQd/841ea728dd6f317120954f6085eb4095/Featured_content_Large_Debit_.jpg?w=768&h=492&q=75&fm=webp"
              alt="waystopaysidebar"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WaysToPayCollapsed;
