import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useStore } from "../utils/appStore";


const usePopularMovies = () => {

    const { addPopularMovies } = useStore();

const getPopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const data = await response.json();
    
    addPopularMovies(data.results);
  }

  useEffect(() => {
    getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
};

export default usePopularMovies;
