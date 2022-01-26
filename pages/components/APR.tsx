import styles from "./css/APR.module.css";

const APR = () => {
  return (
    <div className="px-4 md:px-12 py-24">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="text-4xl mr-4 flex flex-col text-left items-start">
          As low as 0% APR
        </h1>
        <h1 className="text-xl ml-4 flex flex-col text-right items-end">
          See all featured stores
        </h1>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-8 grid-cols-1 gap-4 ">
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/TC898F2XCINHC49F/hero2019111308/hero_offer.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Simply Mac</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/NTMW6QA9FVTCHPFW/hero_20190806153045/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Room & Board</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/MNLK8D11U6PV4THN/hero_20190711215215/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Casper</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/GFFXXAU4GF2951K5/hero/hero.jpg?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover h-42 w-full"
          />
          <h1 className="pt-2 font-bold">Figs</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/K7DQ6PUAWD5M6F0Y/hero2021111653/hero_17.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">GOAT</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7KSWE7M9ANY6F48C/hero2021092313/Dyson_Hero_2021.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Dyson</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/J82E1ZS1P2YHE6S1/hero_20190712104653/hero.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">Joybird</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
        <div className="col-span-1 m-2">
          <img
            src="https://cdn-assets.affirm.com/merchant/promos/7B6478KO7RT4JTU0/hero2022011152/hero_17.png?width=576px&format=jpg&quality=75"
            alt="mac"
            className="object-cover"
          />
          <h1 className="pt-2 font-bold">adidas</h1>
          <h1 className="pb-2">As low as 0% APR</h1>
        </div>
      </div>
    </div>
  );
};

export default APR;
