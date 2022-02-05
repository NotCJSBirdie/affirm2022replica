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
        className="title-font flex  flex-row items-center font-medium text-black  active:transition-transform md:mb-0"
        onClick={() => setArrow(!arrow)}
      >
        <button
          className="flex w-full flex-row items-center justify-between"
          {...getToggleProps()}
        >
          <span className="text-xl">Sign In</span>
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

      <div className="px-5 py-2">
        <section {...getCollapseProps()}>
          <div className="my-4">
            <button className="w-full rounded-3xl border-2 border-purple-700 bg-purple-700 py-2 px-6 text-white ">
              Sign In
            </button>
          </div>

          <div className="my-4">
            <h1 className="w-full text-center text-purple-700">
              Create Account
            </h1>
          </div>

          <div className="my-4">
            <button className="w-full rounded-3xl border-2 border-purple-700 bg-white py-2 px-6 text-purple-700 ">
              Business sign in
            </button>
          </div>

          <div className="my-4">
            <h1 className="w-full text-center text-purple-700">
              Business sign up
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignInCollapsed;
