import React from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-25 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-shadow-md font-bold w-1/2">{overview}</p>
      <div className="flex gap-4 p-5">
        <button className="bg-white text-black px-7 py-2 rounded-md  hover:bg-gray-300/90">
          <FaPlay className="inline-block mr-2 text-2xl item-center" /> Play
        </button>
        <button className="bg-gray-400/40 text-white px-6 py-2 rounded-md hover:bg-gray-500/50">
          <IoMdInformationCircleOutline className="inline-block mr-2 text-2xl item-center" />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
