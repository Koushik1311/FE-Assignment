"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import InitialMovieCard from "./InitialMovieCard";
import { MovieDetailType } from "@/types/MovieType";
import { getInitialMovies } from "@/data/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const recommendedMoviesTitles = [
  "Bhool Bhulaiyaa 3",
  "Amaran",
  "Appudo Ippudo Eppudo",
  "Singham Again",
  "Bloody Beggar",
  "Venom: The Last Dance",
  "Devara Part 1",
  "I am Kathalan",
  "The Wild Robot",
  "Despicable Me 4",
];

type swiperType = {
  slideNext: () => void;
  slidePrev: () => void;
};

export default function RecommendedMovies() {
  const [initialMovies, setInitialMovies] = useState<MovieDetailType[]>([]);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const swiperRef: MutableRefObject<swiperType | undefined> = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      const movieDetails = await Promise.all(
        recommendedMoviesTitles.map(async (movieTitle) => {
          const movieData = await getInitialMovies(movieTitle);
          return movieData;
        })
      );
      setInitialMovies(movieDetails);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Recommended Movies
      </h3>
      <div className="relative">
        <button
          className={
            slideIndex === 0
              ? `hidden`
              : `hidden absolute top-[170px] -left-[20px] bg-gray-500 z-50 rounded-full w-10 h-10 lg:flex items-center justify-center`
          }
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slidePrev();
            }
          }}
        >
          <ChevronLeft className="text-white w-7 h-7" />
        </button>

        <button
          className={
            slideIndex === 5
              ? "hidden"
              : "hidden absolute top-[170px] -right-[20px] bg-gray-500 z-50 rounded-full w-10 h-10 lg:flex items-center justify-center"
          }
          onClick={() => {
            if (swiperRef.current) {
              swiperRef.current.slideNext();
            }
          }}
        >
          <ChevronRight className="text-white w-7 h-7" />
        </button>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setSlideIndex(swiper.activeIndex);
          }}
          slidesPerView={3}
          spaceBetween={8}
          breakpoints={{
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
              slidesPerGroup: 5,
            },
          }}
        >
          {initialMovies.map((movie, index) => (
            <SwiperSlide key={index}>
              <InitialMovieCard searchedMovie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
