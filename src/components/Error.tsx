import React from "react";

const Error = ({ message }: { message: string }) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "70vh" }}
    >
      <h1 className="font-bold text-xl text-gray-600 mb-6">
        {" "}
        Something went wrong{" "}
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        height="100"
        width="100"
        viewBox="0 0 424 511.51"
      >
        <path
          fill="#565656"
          fill-rule="nonzero"
          d="M174.43 443.27H21.31C9.54 443.27 0 433.73 0 421.97V21.3C0 9.51 9.52 0 21.31 0h200.94c3.64 0 6.97 1.66 9.15 4.36l104.84 102.09c5.64 5.64 8.62 10.07 8.62 11.43l-.02 135.35c-7.59-3.2-15.53-5.72-23.76-7.49l-.01-113.62h-98.82c-6.64 0-11.94-5.41-11.94-11.95V23.69H23.8v395.78h140.26c2.7 8.32 6.18 16.28 10.37 23.8zm118.07-169.1c28.59 0 54.48 11.59 73.22 30.33 18.75 18.74 30.33 44.63 30.33 73.23 0 20.92-6.2 40.39-16.87 56.68L424 483.26l-30.9 28.25-43.23-47.56c-16.42 10.95-36.15 17.34-57.37 17.34-28.6 0-54.49-11.6-73.22-30.34-18.75-18.74-30.34-44.63-30.34-73.22 0-28.6 11.59-54.49 30.33-73.23 18.74-18.74 44.63-30.33 73.23-30.33zm59.62 43.93c-15.25-15.26-36.33-24.7-59.62-24.7s-44.37 9.44-59.62 24.7c-15.26 15.26-24.7 36.34-24.7 59.63 0 23.28 9.44 44.37 24.7 59.62 15.25 15.26 36.33 24.69 59.62 24.69s44.37-9.43 59.62-24.69c15.26-15.26 24.7-36.34 24.7-59.62 0-23.29-9.44-44.37-24.7-59.63zm-36.35 21.39 14.49 14.57-23.37 23.67 23.39 23.69-14.53 14.49-23.25-23.54-23.27 23.58-14.49-14.57 23.36-23.67-23.38-23.69 14.53-14.49 23.24 23.54 23.28-23.58z"
        />
      </svg>

      {message && (
        <div className="px-8 my-4 text-gray-800" style={{ fontSize: 8 }}>
          {" "}
          Details : {JSON.stringify(message)}{" "}
        </div>
      )}
    </div>
  );
};

export default Error;
