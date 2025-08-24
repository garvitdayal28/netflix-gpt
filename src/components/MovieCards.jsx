import React from "react";
import { CDN_URL } from "../utils/constants";

export const MovieCards = ({ movies }) => {
  return (
    <div className="flex gap-4 pl-5">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="w-36 md:w-48 flex-shrink-0 hover:scale-105 transition-transform duration-300"
        >
          <img
            className="w-full rounded-lg cursor-pointer"
            src={`${CDN_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};
