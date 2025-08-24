import React from "react";
import { API_OPTIONS } from "../utils/constants";
import { useStore } from "../utils/appStore";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId, title }) => {
  const { trailerKey } = useStore();

  useMovieTrailer((movieId = { movieId }));

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
