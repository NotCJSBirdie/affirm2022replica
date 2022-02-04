import React from "react";
import styles from "./css/SignInCollapsed.module.css";
import useCollapse from "react-collapsed";
import { useState } from "react";

const SignInCollapsed = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [arrow, setArrow]: any = useState(false);
  return (
    <div>
      <div
        className="flex flex-row  title-font font-medium items-center text-black  md:mb-0 active:transition-transform"
        onClick={() => setArrow(!arrow)}
      >
        <button className="flex flex-row" {...getToggleProps()}>
          <span className="text-3xl">Sign In</span>
          <div>
            {arrow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-down transition-all pointer-events-auto"
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
                className="icon icon-tabler icon-tabler-chevron-down transition-all ease-in-out -rotate-180 pointer-events-auto"
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

export default SignInCollapsed;
