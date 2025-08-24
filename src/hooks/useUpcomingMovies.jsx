import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useStore } from "../utils/appStore";


const useUpcomingMovies = () => {

    const { addUpcomingMovies } = useStore();

const getUpcomingMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
    const data = await response.json();
    
    addUpcomingMovies(data.results);
  }

  useEffect(() => {
    getUpcomingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
};

export default useUpcomingMovies;
