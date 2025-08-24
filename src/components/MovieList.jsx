import React from "react";
import { MovieCards } from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-2 md:px-6 mb-6">
      <h1 className="text-xl md:text-3xl font-bold text-white py-3 pl-5">
        {title}
      </h1>
      <div className="overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-900 hover:scrollbar-thumb-gray-500 rounded-lg pb-2">
        <MovieCards movies={movies} />
      </div>
    </div>
  );
};

export default MovieList;
