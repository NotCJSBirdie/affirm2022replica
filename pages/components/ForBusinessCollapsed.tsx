import React from "react";
import styles from "./css/ForBusinessCollapsed.module.css";
import useCollapse from "react-collapsed";
import { useState } from "react";

const ForBusinessCollapsed = () => {
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
          <span className="text-xl font-bold">For Business</span>
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

      <div className=" py-2">
        <section {...getCollapseProps()}>
          <h1 className="text-gray-400">INDUSTRIES</h1>

          <p className="my-2 text-lg">Home & lifestyle</p>
          <p className="mb-2 text-lg">Fashion</p>
          <p className="mb-2 text-lg">Auto</p>
          <p className="mb-2 text-lg">Fitness & sporting goods</p>
          <p className="mb-2 text-lg">Travel</p>
          <p className="mb-2 text-lg">Other</p>

          <h1 className="text-gray-400">SOLUTIONS</h1>
          <p className="my-2 text-lg">Overview</p>
          <p className="mb-2 text-lg">Increase awareness</p>
          <p className="mb-2 text-lg">Increase consideration</p>
          <p className="mb-2 text-lg">Increase conversion</p>
          <p className="mb-2 text-lg">Omnichannel</p>

          <h1 className="text-gray-400">RESOURCES</h1>
          <p className="my-2 text-lg">Marketing toolkit</p>
          <p className="my-2 text-lg">For developers</p>
          <p className="my-2 text-lg">Blog</p>
          <p className="my-2 text-lg">Partnerships</p>
          <p className="my-2 text-lg">FAQs</p>

          <div className="my-4">
            <button className="w-full rounded-3xl bg-purple-700 py-2 px-6 text-white">
              Get started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForBusinessCollapsed;
