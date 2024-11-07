"use client";

import { MovieSearchType } from "@/types/movieSearchType";
import Image from "next/image";

type Props = {
  searchedMovie: MovieSearchType;
};

export default function MovieCard({ searchedMovie }: Props) {
  return (
    <div className="relative">
      <Image
        src={searchedMovie.Poster}
        width={222}
        height={400}
        alt="Poster"
        className="h-[205px] w-auto md:h-[392px] lg:w-full lg:h-[378px] relative rounded-lg object-cover"
      />

      <h3 className="text-lg font-medium text-gray-950 mt-3 mb-1">
        {searchedMovie.Title}
      </h3>
    </div>
  );
}
