import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[20%] px-[4%] text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-gray-400 text-black py-2 px-6 text-lg mx-2 rounded flex items-center hover:bg-opacity-80">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white inline text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16"
          >
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-7 text-lg bg-opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
