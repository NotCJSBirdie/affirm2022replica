import styles from "./css/Input.module.css";

const Input = () => {
  return (
    <div className="py-12 px-12 md:w-1/2 w-full relative bottom-24">
      <div className="flex flex-row items-center bg-white rounded-full shadow-2xl py-5">
        <div className="w-11/12 flex flex-col ml-8">
          <span className="w-full">Stores</span>
          <input className="outline-none w-full"></input>
        </div>
        <div className="w-1/12 ml-12 mr-8">
          <button className="w-full bg-purple-600 flex flex-col items-center py-2 px-5 rounded-full">
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
