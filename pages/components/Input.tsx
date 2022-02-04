import styles from "./css/Input.module.css";

const Input = () => {
  return (
    <div className="relative bottom-24 w-full py-12 px-12 md:w-1/2">
      <div className="flex flex-row items-center rounded-full bg-white py-5 shadow-2xl">
        <div className="ml-8 flex w-11/12 flex-col">
          <span className="w-full">Stores</span>
          <input
            placeholder="Where are you shopping?"
            className="w-full outline-none"
          ></input>
        </div>
        <div className="ml-12 mr-8 w-1/12">
          <button className="flex w-full flex-col items-center rounded-full bg-purple-600 py-2 px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
