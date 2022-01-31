import styles from "./css/Choose.module.css";
import Image from "next/image";
import { useState } from "react";

const Choose = () => {
  return (
    <div className="py-24  px-4 md:px-12">
      <div className="grid grid-cols-1 grid-rows-9 md:grid-cols-4 md:grid-rows-3 gap-2">
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 p-4 flex flex-col items-start">
          <div className=" w-full h-full bg-blue-400 pt-80">
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/X96ZPHNIR5GRHG1W/logo2019111308/logo_offer.png?width=128px&format=jpg&quality=75"
              alt="wallmartlogo"
              className="rounded-full mx-6 my-6 w-24 h-24"
            />
          </div>

          <h1 className="my-2">Wallmart.com</h1>
        </div>
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/8L2VTJ7XV2QQ4PCU/hero2022010635/hero_3.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Peloton E-commerce</h1>
        </div>
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/N47TOZUXEXW2S0N1/hero2021041337/amazonhero.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Amazon</h1>
        </div>
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/Z0BQ6KB8BLMXH75Q/hero20191204/hero_offer.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Expedia Hotels & Vacation Packages</h1>
        </div>
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/NJUT88CFF7H7SR5W/hero2021071650/hero_10.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Pottery Barn</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/7H0H2PN1QC5KIQW3/hero2021102035/hero_19.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">The RealReal</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/BTVRFW46WFF8VHAB/hero2021102653/hero_22.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Neiman Marcus</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/ACR3TZT8YMQ9LR9J/hero_20190709134259/hero.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Target</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <img
            src="https://cdn1.affirm.com/platform/public/promos/assets/CGDRJKS4N9B6KQ86/hero/hero2x.png?width=576px&format=jpg&quality=75"
            alt="walmart"
            className="w-full h-full"
          />
          <h1 className="my-2">Lowe's</h1>
        </div>
      </div>
    </div>
  );
};

export default Choose;
