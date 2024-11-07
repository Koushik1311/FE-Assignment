"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { HomeCrouselContent } from "@/static/HomeCrouselContent";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className="w-full my-2 lg:mt-3">
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        initialSlide={1}
        parallax
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          1024: {
            slidesPerView: 1.15,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
        style={
          {
            "--swiper-pagination-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.6",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
            "--swiper-pagination-bullet-height": "8px",
            "--swiper-pagination-bullet-width": "8px",
            "--swiper-pagination-bullet-border-radius": "50%",
            "--swiper-pagination-bottom": "20px",
          } as React.CSSProperties
        }
        className="lg:h-[310px] w-full bg-gray-200"
      >
        {HomeCrouselContent.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center w-auto h-auto lg:mt-3"
          >
            <Image
              src={image}
              alt={`Carousel Image ${index + 1}`}
              width={1240}
              height={287}
              className="lg:rounded-lg object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
