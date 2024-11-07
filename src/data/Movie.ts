const api_uri = process.env.NEXT_PUBLIC_OMDB_API_URI;
const api_key = process.env.NEXT_PUBLIC_OMDB_API_KEY;

// API CALL: Search for movies
export const searchMovie = async (searchPhrase: string) => {
  const response = await fetch(
    `${api_uri}/?apikey=${api_key}&s=${searchPhrase}`
  );

  const data = await response.json();
  const searchedData = data.Search;

  return searchedData;
};

export const getInitialMovies = async (recommendedMovieName: string) => {
  const response = await fetch(
    `${api_uri}/?apikey=${api_key}&t=${recommendedMovieName}`
  );

  const data = await response.json();

  return data;
};
