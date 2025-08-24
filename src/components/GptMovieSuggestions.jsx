import React from "react";
import { useStore } from "../utils/appStore";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { finalMovieList, movieInStore } = useStore();

  return (
    <div className="absolute top-20 w-full">
      <div className="scrollbar-hide">
        <h1 className="text-xl md:text-3xl font-bold text-white py-3 pl-5">
          GPT Movie Suggestions
        </h1>

        

        {movieInStore === "true" &&
          finalMovieList &&
          finalMovieList.length > 0 && (
            <MovieList title="Recommended Movies" movies={finalMovieList} />
          )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
