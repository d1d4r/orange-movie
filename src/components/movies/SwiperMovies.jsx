"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import MovieCard from "./MovieCard";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";

export default function SwiperMovies({ title, data, href }) {
  return (
    <div className="p-5">
      <div className="flex justify-between mb-2">
        <h2 className="text-2xl">{title}</h2>
        <Link href={href}>see more +</Link>
      </div>
      <Swiper
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {data.map((movie) => {
          return (
            <SwiperSlide key={movie.id} >
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

// const isLarge = useMediaQuery("(min-width: 900px)");
