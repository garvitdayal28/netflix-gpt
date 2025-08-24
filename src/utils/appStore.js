import { create } from "zustand";

const useStore = create((set) => ({
  name: null,
  emailId: null,
  userId: null,
  SignedIn: false,
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  trailerKey: null,
  gptSearch: false,
  finalMovieList: [],
  movieInStore: false,

  addUser: (displayName, email, uid) => {
    set({
      name: displayName,
      emailId: email,
      userId: uid,
    });
  },

  removeUser: () => {
    set({
      name: null,
      emailId: null,
      userId: null,
    });
  },

  toggleSignedIn: (value = null) => {
    if (value === null) {
      // Toggle if no value provided
      set((state) => ({ SignedIn: !state.SignedIn }));
    } else {
      // Set to the provided value
      set({ SignedIn: value });
    }
  },

  addNowPlayingMovies: (moviesList) => {
    set({ nowPlayingMovies: moviesList });
  },

  addPopularMovies: (moviesList) => {
    set({ popularMovies: moviesList });
  },

  addTopRatedMovies: (moviesList) => {
    set({ topRatedMovies: moviesList });
  },

  addUpcomingMovies: (moviesList) => {
    set({ upcomingMovies: moviesList });
  },

  addTrailerKey: (key) => {
    set({ trailerKey: key });
  },
  toggleGptSearch: () => {
    set((state) => ({ gptSearch: !state.gptSearch }));
  },

  addGeminiMovies: (moviesList) => {
    set({ finalMovieList: moviesList });
  },
  setMovieInStore: () => {
    set({ movieInStore: "true" });
  },
}));

export { useStore };
