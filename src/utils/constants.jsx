export const LOGO = "https://i.imgur.com/zHwwMdU.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

// export const CDN_URL = "https://image.tmdb.org/t/p/original";
export const CDN_URL = "https://image.tmdb.org/t/p/w780";

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;
