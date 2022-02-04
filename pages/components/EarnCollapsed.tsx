import React from "react";
import styles from "./css/EarnCollapsed.module.css";
import useCollapse from "react-collapsed";
import { useState } from "react";

const EarnCollapsed = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [arrow, setArrow]: any = useState(false);
  return (
    <div>
      <div
        className="title-font flex  flex-row items-center font-medium text-black  active:transition-transform md:mb-0"
        onClick={() => setArrow(!arrow)}
      >
        <button className="flex flex-row" {...getToggleProps()}>
          <span className="text-3xl">Earn</span>
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

      <div className="px-5 ">
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

export default EarnCollapsed;
