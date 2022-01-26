import styles from "./css/Trending.module.css";

const Trending = () => {
  return (
    <div className="px-4 md:px-12 py-24">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="text-4xl mr-4 flex flex-col text-left items-start">
          Trending Stores
        </h1>
        <h1 className="text-xl ml-4 flex flex-col text-right items-end">
          See all featured stores
        </h1>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-8 grid-cols-1 gap-4 ">
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/WGUM9CGP0OK9R3CL/hero2021111204/hero_14.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Delta Vacations</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/EDRFEMXM6RU7OHYZ/hero2020080511/hero1.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Saks Fifth Avenue</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn1.affirm.com/platform/public/promos/assets/NSPUC8PSFQHHR163/hero/hero2x.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Reverb</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/7H0H2PN1QC5KIQW3/hero2021102035/hero_19.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover h-42 w-full"
          />
          <h1 className="pt-2 font-bold">Mirror</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn1.affirm.com/platform/public/promos/assets/FL5S2IGC7AVTAHAS/hero/hero2x.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Expedia Hotels & Vacation Packages</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/YKHCNPR33GOHG3M6/hero2021070843/Tradesy_hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Molekule</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/T6GXUVZ3PPEXM71C/hero_20190806135157/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">ThredUP</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/P7MNFVQETFPEWOZT/hero20200312/hero_offer.png?width=576px&format=jpg&quality=75"
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

export default Trending;
