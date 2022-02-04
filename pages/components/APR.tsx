import styles from "./css/APR.module.css";

const APR = () => {
  return (
    <div className="px-4 py-24 md:px-16">
      <div className="flex flex-row items-center justify-between py-8">
        <h1 className="mr-4 flex flex-col items-start text-left text-4xl">
          As low as 0% APR
        </h1>
        <h1 className="ml-4 flex flex-col items-end text-right text-xl">
          See all featured stores
        </h1>
      </div>

      <div className="grid-rows-8 grid grid-cols-1 gap-1 md:grid-cols-4 md:grid-rows-2">
        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.simplymac}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/TC898F2XCINHC49F/logo2019111308/logo_offer.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Simply Mac</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.roomandboard}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/NTMW6QA9FVTCHPFW/logo_20190806153044/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Room & Board</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.casper}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/MNLK8D11U6PV4THN/logo_20190711215210/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Casper</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.figs}
            className=" h-full w-full rounded-3xl bg-white pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/GFFXXAU4GF2951K5/logo/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full bg-white drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Figs</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.goat}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/K7DQ6PUAWD5M6F0Y/logo20191029/logo_offer.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Goat</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.dyson}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7KSWE7M9ANY6F48C/logo20191212/logo_offer.jpg?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Dyson</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.joybird}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/J82E1ZS1P2YHE6S1/logo_20190712104700/logo.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
            />
          </div>

          <h1 className="mt-2">Joybird</h1>

          <h1 className="mb-2">As low as 0% APR</h1>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-start p-4">
          <div
            id={styles.adidas}
            className=" h-full w-full rounded-3xl pt-48 ease-in-out md:pt-12"
          >
            <img
              src="https://cdn-assets.affirm.com/vcn_buy/v1/merchants/7B6478KO7RT4JTU0/logo2019111307/logo_offer.png?width=128&format=jpg&quality=75"
              className="mx-4 my-4 h-20 w-20 rounded-full drop-shadow-2xl"
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
