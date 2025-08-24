import React from "react";
import { useRef } from "react";
import ai from "../utils/gemini"; // Import the AI client
import { API_OPTIONS } from "../utils/constants";
import { useStore } from "../utils/appStore";

const GptSearchBar = () => {
  const { addGeminiMovies, setMovieInStore } = useStore();
  const searchText = useRef(null);

  const searchMovie = async (title) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    

    const searchQuery =
      "act as a movie recommendation system, and suggest movies based on the user's input: " +
      searchText.current.value +
      ". Provide a list of 10 movies with their titles and brief descriptions.format it like a object with keys 'title' and 'description' for each movie.Example: [{title: 'Inception', description: 'A mind-bending thriller about dream invasion.'}, {title: 'The Matrix', description: 'A hacker discovers the true nature of reality.'}].Make sure there aren't any other text except the list of movies";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: searchQuery,
    });
    if (!response || !response.text) {
      
      return;
    }

    

    // Extract the JSON content from the markdown code block
    const jsonContent = response.text.replace(/```json|```/g, "").trim();

    const moviesArray = JSON.parse(jsonContent);

    // Store the original Gemini movies for reference
    const geminiMovies = moviesArray;
    

    // Search TMDB for each movie title
    const promiseArrayFromTmbd = moviesArray.map((movie) =>
      searchMovie(movie.title)
    );

    // Get all results from TMDB
    const movieInfoFromTmdb = await Promise.all(promiseArrayFromTmbd);
    

    // Filter TMDB results to get exact matches or closest matches
    const filteredMovies = [];

    for (let i = 0; i < geminiMovies.length; i++) {
      const geminiTitle = geminiMovies[i].title.toLowerCase();
      const tmdbResults = movieInfoFromTmdb[i];

      // First try to find exact match
      const exactMatch = tmdbResults.find(
        (movie) => movie.title.toLowerCase() === geminiTitle
      );

      // If exact match found, use it
      if (exactMatch) {
        filteredMovies.push({
          ...exactMatch,
          geminiDescription: geminiMovies[i].description,
        });
      }
      // Otherwise use the closest match (first result)
      else if (tmdbResults.length > 0) {
        filteredMovies.push({
          ...tmdbResults[0],
          geminiDescription: geminiMovies[i].description,
          note: "Not exact match",
        });
      }
      // If no results at all
      else {
        filteredMovies.push({
          title: geminiMovies[i].title,
          description: geminiMovies[i].description,
          noTmdbMatch: true,
        });
      }
    }

    

    if (filteredMovies && filteredMovies.length > 0) {
      // Store data in the store
      addGeminiMovies(filteredMovies);
      setMovieInStore();
    } else {
      console.error("No filtered movies available to store");
    }
  };

  return (
    <div className="">
      <form
        className=" flex justify-center px-4 bg-[#212121] rounded-md shadow-lg h-screen relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch?"
          className=" flex-1 p-2 py-2.5 bg-[#2a2a2a] text-white rounded-md h-11 absolute bottom-6 left-0 right-0 mx-4"
        />
        <button
          type="submit"
          className="bg-[#181818] text-white py-2 px-5 rounded-md font-bold border-black/20 border-2 hover:bg-[#2a2a2a] hover:scale-105 transition-transform duration-300 shadow-md  h-11 absolute bottom-6 right-4"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
