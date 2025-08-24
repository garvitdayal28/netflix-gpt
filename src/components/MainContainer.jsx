import React from "react";
import { useStore } from "../utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const { nowPlayingMovies } = useStore();
  if (!nowPlayingMovies || nowPlayingMovies.length === 0) {
    return;
  }

  const mainMovies = nowPlayingMovies[1];

  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} title={original_title} />
    </div>
  );
};

export default MainContainer;
