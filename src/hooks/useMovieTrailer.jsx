import React, {useEffect} from 'react'
import { useStore } from '../utils/appStore';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = ({movieId}) => {

  const {addTrailerKey} = useStore();
    
    const getMovieVideo = async (movieId) => {
        if (!movieId) {
            
            return;}
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter(video => video.type === 'Trailer');

    const trailer = filterData.length ? filterData[0] : json.results[0];
    addTrailerKey(trailer.key);
}

    useEffect(() => {
        getMovieVideo(movieId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId])
}

export default useMovieTrailer