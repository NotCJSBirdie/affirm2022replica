import styles from "./css/Choose.module.css";
import Image from "next/image";
import { useState } from "react";

const Choose = () => {
  return (
    <div className="py-24  px-4 md:px-12">
      <div className="grid-rows-9 grid grid-cols-1 gap-1 md:grid-cols-4 md:grid-rows-3">
        <div className="col-span-1 row-span-1 flex flex-col items-start overflow-hidden p-4 md:col-span-2 md:row-span-2">
          <div
            id={styles.walmart}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-72"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/X96ZPHNIR5GRHG1W/logo2019111308/logo_offer.png?width=128px&format=jpg&quality=75"
              alt="wallmartlogo"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Wallmart.com</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.peloton}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/8L2VTJ7XV2QQ4PCU/logo_20190806151141/logo.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Peloton E-commerce</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.amazon}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/N47TOZUXEXW2S0N1/logo20200116/logo_offer.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Amazon</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.expedia}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/Z0BQ6KB8BLMXH75Q/logo20191204/logo_offer.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Expedia Hotels & Vacation Packages</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.potterybarn}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/NJUT88CFF7H7SR5W/logo_20190712141348/logo.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Pottery Barn</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.therealreal}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12 "
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7H0H2PN1QC5KIQW3/logo_20190710131052/logo.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full object-cover object-center drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">The RealReal</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.neimanmarcus}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/IMN5N5JF1N0YZW4A/logo20200220/logo_offer.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full object-cover object-center drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Neiman Marcus</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.target}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7U4QKHI3UHU0Y33C/logo2020081144/logo1.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full object-cover object-center drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Target</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.lowes}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn1.affirm.com/platform/public/promos/assets/CGDRJKS4N9B6KQ86/logo/logo1x.png?width=128px&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full object-cover object-center drop-shadow-2xl"
            />
          </div>

          <h1 className="my-2">Lowe's</h1>
        </div>
      </div>
    </div>
  );
};

export default Choose;
