import { MovieSearchType } from "@/types/movieSearchType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state for movie details
type MovieState = {
  movieDetails: MovieSearchType[];
};

// Initial state of the movie slice
const initialState: MovieState = {
  movieDetails: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieDetails: (state, action: PayloadAction<MovieSearchType[]>) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { setMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
