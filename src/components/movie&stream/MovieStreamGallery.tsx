"use client";

import { useAppSelector } from "@/redux/store";
import MovieCard from "./MovieCard";
import RecommendedMovies from "./RecommendedMovies";
import PremireOfTheWeek from "./PremireOfTheWeek";
import { useSearchParams } from "next/navigation";

export default function MovieStreamGallery() {
  // Get movie details from redux store
  const results = useAppSelector((state) => state.movieReducer.movieDetails);

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  if (!results || results.length === 0) {
    return (
      <div className="container mt-6">
        {/* Initial Movie Card */}
        {category === "Stream" ? <PremireOfTheWeek /> : <RecommendedMovies />}
      </div>
    );
  }

  // Filter out movies with any property as "N/A"
  const filteredResults = results.filter(
    (result) =>
      result.Title !== "N/A" &&
      result.Year !== "N/A" &&
      result.imdbID !== "N/A" &&
      result.Type !== "N/A" &&
      result.Poster !== "N/A"
  );

  return (
    <div className="container mt-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Search Result
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {filteredResults.map((results) => (
          <MovieCard key={results.imdbID} searchedMovie={results} />
        ))}
      </div>
    </div>
  );
}
