import React from "react";
const DarkModeToggleBtn = ({ mode, setMode }: any) => {
  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="border border-solid border-black rounded-md p-1 text-xs self-end my-4 mr-4 dark:text-black dark:bg-white"
      onClick={handleClick}
    >
      <div className="flex flex-row items-center">
        dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="night-mode"
          x="0"
          y="0"
          version="1.1"
          height="16"
          width="16"
          viewBox="0 0 29 29"
        >
          <path d="M19.282 17.038c-4.15-.513-7.691-3.379-9.245-7.261a11.042 11.042 0 0 1-.748-5.355.5.5 0 0 0-.772-.468C5.09 6.156 2.905 10.121 3.261 14.573c.442 5.524 4.959 10.056 10.482 10.513 5.646.468 10.522-3.148 12.01-8.213.118-.402-.274-.774-.661-.614a11.43 11.43 0 0 1-5.81.779z"></path>
        </svg>
        <div className="">{mode === "dark" ? " on" : " off"}</div>
      </div>
    </button>
  );
};

export default DarkModeToggleBtn;
