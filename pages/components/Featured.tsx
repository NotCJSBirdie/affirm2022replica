import React from "react";
import styles from "./css/Feature.module.css";

const Featured = () => {
  return (
    <div className="px-4 md:px-16 py-24">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="text-4xl mr-4 flex flex-col text-left items-start">
          Featured Stores
        </h1>
        <h1 className="text-xl ml-4 flex flex-col text-right items-end">
          See all featured stores
        </h1>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-8 grid-cols-1 gap-1 ">
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.deltavacations}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/IIOERFI5KRYG1QR0/logo20191001/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.saksfifthavenue}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/merchant/promos/KGYHY5KUZIA6C5ET/logo2021032946/saks_logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.reverb}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/P2T82BO89LRD4WYH/logo_20190710101744/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.mirror}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/MZ5NBOKI64F9QBB3/logo_20190806145554/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.expedia}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/Z0BQ6KB8BLMXH75Q/logo20191204/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.molekule}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/0ZV27J8P7X3UJJ0R/logo_20190712134504/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.thredup}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/JN8GO75EH36UNBA4/logo2019111307/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.nike}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/44WXOQ22LJEYREMX/logo20201103/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
