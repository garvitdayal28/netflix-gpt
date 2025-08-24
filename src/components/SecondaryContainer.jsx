import React from 'react'
import MovieList from './MovieList'
import { useStore } from '../utils/appStore'

const SecondaryContainer = () => {
  const {nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies}=useStore()
  return (
    <div className='relative -mt-94 px-8'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={popularMovies}/>
      <MovieList title={"Top Rated"} movies={topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer