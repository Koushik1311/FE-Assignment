"use client";

import { MovieDetailType } from "@/types/MovieType";
import { Star } from "lucide-react";
import Image from "next/image";

type Props = {
  searchedMovie: MovieDetailType;
};

export default function InitialMovieCard({ searchedMovie }: Props) {
  return (
    <div>
      <Image
        src={searchedMovie.Poster}
        width={222}
        height={400}
        alt="Poster"
        className="h-[205px] w-auto md:h-[392px] lg:w-full lg:h-[378px] relative rounded-lg object-cover"
      />
      <div className="hidden lg:block relative">
        <div className="text-lg font-light px-1 w-full flex items-center justify-between mt-2 absolute bg-black text-white rounded-b-lg -top-[36px]">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-rose-500" />
            <span>
              {searchedMovie.imdbRating === "N/A"
                ? 0
                : searchedMovie.imdbRating}
              /10
            </span>
          </div>
          <div>
            <span>
              {searchedMovie.imdbVotes === "N/A" ? 0 : searchedMovie.imdbVotes}{" "}
              Votes
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-base lg:text-lg lg:font-medium truncate text-gray-950 my-1">
        {searchedMovie.Title}
      </h3>
      <p className="hidden lg:block text-base lg:text-lg text-gray-500">
        {searchedMovie.Genre}
      </p>
    </div>
  );
}
