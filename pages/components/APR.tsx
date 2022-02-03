import styles from "./css/APR.module.css";

const APR = () => {
  return (
    <div className="px-4 md:px-16 py-24">
      <div className="flex flex-row justify-between items-center py-8">
        <h1 className="text-4xl mr-4 flex flex-col text-left items-start">
          As low as 0% APR
        </h1>
        <h1 className="text-xl ml-4 flex flex-col text-right items-end">
          See all featured stores
        </h1>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-rows-8 grid-cols-1 gap-1">
        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.simplymac}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/TC898F2XCINHC49F/logo2019111308/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.roomandboard}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/NTMW6QA9FVTCHPFW/logo_20190806153044/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Room & Board</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.casper}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/MNLK8D11U6PV4THN/logo_20190711215210/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Casper</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.figs}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl bg-white"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/GFFXXAU4GF2951K5/logo/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl bg-white"
            />
          </div>

          <h1 className="mt-2">Figs</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.goat}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/K7DQ6PUAWD5M6F0Y/logo20191029/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Goat</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.dyson}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7KSWE7M9ANY6F48C/logo20191212/logo_offer.jpg?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Dyson</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.joybird}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/J82E1ZS1P2YHE6S1/logo_20190712104700/logo.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Joybird</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 p-4 flex flex-col items-start">
          <div
            id={styles.adidas}
            className=" w-full h-full pt-48 md:pt-12 ease-in-out rounded-3xl"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7B6478KO7RT4JTU0/logo2019111307/logo_offer.png?width=128&format=jpg&quality=75"
              className="rounded-full mx-4 my-4 w-20 h-20 drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Adidas</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>
      </div>
    </div>
  );
};

export default APR;
