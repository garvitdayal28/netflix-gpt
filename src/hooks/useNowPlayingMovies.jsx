import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useStore } from "../utils/appStore";


const useNowPlayingMovies = () => {

    const { addNowPlayingMovies } = useStore();

const getNowPlayingMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const data = await response.json();
    
    addNowPlayingMovies(data.results);
  }

  useEffect(() => {
    getNowPlayingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
};

export default useNowPlayingMovies;
