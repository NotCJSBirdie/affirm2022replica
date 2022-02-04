import styles from "./css/Trending.module.css";

const Trending = () => {
  return (
    <div className="px-4 md:px-16 py-24">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="text-4xl mr-4 flex flex-col text-left items-start">
          Trending Stores
        </h1>
        <h1 className="text-xl ml-4 flex flex-col text-right items-end">
          See all featured stores
        </h1>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-8 grid-cols-1 gap-1">
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.bestbuy}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/WGUM9CGP0OK9R3CL/logo20201103/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.stockx}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/EDRFEMXM6RU7OHYZ/logo2019111307/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.dji}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/NSPUC8PSFQHHR163/logo/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.therealreal}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7H0H2PN1QC5KIQW3/logo_20190710131052/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.lull}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn1.affirm.com/platform/public/promos/assets/FL5S2IGC7AVTAHAS/logo/logo1x.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.tradesy}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/YKHCNPR33GOHG3M6/logo_20190712184625/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.ibuypower}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/T6GXUVZ3PPEXM71C/logo_20190806135155/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.theragun}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/P7MNFVQETFPEWOZT/logo20200312/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="mb-2 invisible">As low as 0% APR</h1>
        </div>
      </div>
    </div>
  );
};

export default Trending;
