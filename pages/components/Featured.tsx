import React from "react";

const Featured = () => {
  return (
    <div className="px-4 md:px-12 py-24">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="text-4xl mr-4 flex flex-col text-left items-start">
          Featured Stores
        </h1>
        <h1 className="text-xl ml-4 flex flex-col text-right items-end">
          See all featured stores
        </h1>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-8 grid-cols-1 gap-4 ">
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/ADZ7B0E05VRTMPN2/hero20190109/hero_offer.jpg?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Delta Vacations</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/KGYHY5KUZIA6C5ET/hero2022012002/hero_27.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Saks Fifth Avenue</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/P2T82BO89LRD4WYH/hero_20190710101735/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Reverb</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/MZ5NBOKI64F9QBB3/hero_20190806145556/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover h-42 w-full"
          />
          <h1 className="pt-2 font-bold">Mirror</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/Z0BQ6KB8BLMXH75Q/hero20191204/hero_offer.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Expedia Hotels & Vacation Packages</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/0ZV27J8P7X3UJJ0R/hero_20190712134510/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Molekule</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/JN8GO75EH36UNBA4/hero2019111307/hero_offer.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">ThredUP</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/44WXOQ22LJEYREMX/hero2022010410/hero_2.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Nike</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
