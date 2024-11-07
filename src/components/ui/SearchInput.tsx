"use client";

import { searchMovie } from "@/data/Movie";
import { setMovieDetails } from "@/redux/features/movie-slice";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState<string>(searchTerm);

  const dispatch = useDispatch();

  useEffect(() => {
    // Set up debounce by setting a timeout
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 600); // 600 ms delay for debounce

    // Clean up the timeout if input changes before 600 ms
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    const fetchMovie = async () => {
      // Checks if the searchTerm is null, undefined or an empty string
      if (
        searchTerm !== null &&
        searchTerm !== undefined &&
        searchTerm.trim() !== ""
      ) {
        // If there is a debouncedTerm then call the searchMovie(API call function)
        if (debouncedTerm) {
          const data = await searchMovie(debouncedTerm);
          dispatch(setMovieDetails(data));
        }
      }
    };

    fetchMovie();
  }, [debouncedTerm, dispatch, searchTerm]);

  return (
    <div className="relative group">
      {/* Search Icon */}
      <Search className="absolute top-[10px] text-rose-500 lg:text-rose-200 left-3 w-4 h-4 transition-colors group-focus-within:text-rose-500" />

      {/* Search Input */}
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Movies"
        className="border border-rose-500 lg:border-rose-200 focus:outline-none lg:focus:ring-1 lg:focus:ring-rose-500 h-9 pl-12 pr-4 pb-[2px] w-full lg:w-[550px] rounded-md"
      />
    </div>
  );
}
