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
        className="flex flex-row title-font font-medium items-center text-black  active:transition-transform"
        onClick={() => setArrow(!arrow)}
      >
        <button className="flex flex-row" {...getToggleProps()}>
          <span className="text-3xl">Ways To Pay</span>
          <div>
            {arrow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-up ml-1 ease-in-out transition-all pointer-events-auto -rotate-180"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="9" x2="12" y2="5" />
                <line x1="8" y1="9" x2="12" y2="5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-up ml-1 ease-in-out transition-all pointer-events-auto"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="9" x2="12" y2="5" />
                <line x1="8" y1="9" x2="12" y2="5" />
              </svg>
            )}
          </div>
        </button>
      </div>

      <div className="px-5 py-2">
        <section {...getCollapseProps()}>
          <h1 id={styles.reactcollapse}>Pieces</h1>
          <h1 id={styles.reactcollapse}>Designers</h1>
          <h1 id={styles.reactcollapse}>About</h1>
          <h1 id={styles.reactcollapse}>Contact</h1>
        </section>
      </div>
    </div>
  );
};

export default WaysToPayCollapsed;
