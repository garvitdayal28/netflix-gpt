import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useStore } from "../utils/appStore";


const useTopRatedMovies = () => {

    const { addTopRatedMovies } = useStore();

const getTopRatedMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const data = await response.json();
    
    addTopRatedMovies(data.results);
  }

  useEffect(() => {
    getTopRatedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
};

export default useTopRatedMovies;
