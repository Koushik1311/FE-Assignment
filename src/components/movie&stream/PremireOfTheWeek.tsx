"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import InitialMovieCard from "./InitialMovieCard";
import { MovieDetailType } from "@/types/MovieType";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getInitialStreams } from "@/data/Stream";

const premiereStreamTitles = [
  "The Exorcism",
  "Bato Road to Death",
  "Transformers One",
  "Treasure",
  "In the Name of God",
  "Knox Goes Away",
  "Yolo",
  "The Great Escaper",
  "Azrael",
  "Laandhar",
];

type swiperType = {
  slideNext: () => void;
  slidePrev: () => void;
};

export default function PremireOfTheWeek() {
  const [streams, setStreams] = useState<MovieDetailType[]>([]);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const swiperRef: MutableRefObject<swiperType | undefined> = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      const movieDetails = await Promise.all(
        premiereStreamTitles.map(async (movieTitle) => {
          const movieData = await getInitialStreams(movieTitle);
          return movieData;
        })
      );
      setStreams(movieDetails);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Premiere of the Week
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
          {streams.map((stream, index) => (
            <SwiperSlide key={index}>
              <InitialMovieCard searchedMovie={stream} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
