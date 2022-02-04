import styles from "./css/Trending.module.css";

const Trending = () => {
  return (
    <div className="px-4 py-24 md:px-16">
      <div className="flex flex-row items-center justify-between py-8">
        <h1 className="mr-4 flex flex-col items-start text-left text-4xl">
          Trending Stores
        </h1>
        <h1 className="ml-4 flex flex-col items-end text-right text-xl">
          See all featured stores
        </h1>
      </div>

      <div className="grid-rows-8 grid grid-cols-1 gap-1 md:grid-cols-4 md:grid-rows-2">
        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.bestbuy}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/WGUM9CGP0OK9R3CL/logo20201103/logo_offer.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.stockx}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/EDRFEMXM6RU7OHYZ/logo2019111307/logo_offer.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.dji}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/NSPUC8PSFQHHR163/logo/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.therealreal}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7H0H2PN1QC5KIQW3/logo_20190710131052/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.lull}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn1.affirm.com/platform/public/promos/assets/FL5S2IGC7AVTAHAS/logo/logo1x.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.tradesy}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/YKHCNPR33GOHG3M6/logo_20190712184625/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.ibuypower}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/T6GXUVZ3PPEXM71C/logo_20190806135155/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.theragun}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/P7MNFVQETFPEWOZT/logo20200312/logo_offer.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Delta Vacations</h1>

          <h1 className="invisible mb-2">As low as 0% APR</h1>
        </div>
      </div>
    </div>
  );
};

export default Trending;
