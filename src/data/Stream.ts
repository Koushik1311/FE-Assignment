const api_uri = process.env.NEXT_PUBLIC_OMDB_API_URI;
const api_key = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const getInitialStreams = async (streamName: string) => {
  const response = await fetch(`${api_uri}/?apikey=${api_key}&t=${streamName}`);

  const data = await response.json();

  return data;
};
