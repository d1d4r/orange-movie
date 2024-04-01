"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
      <Swiper spaceBetween={10} slidesPerView={5}>
        {data.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

// const isLarge = useMediaQuery("(min-width: 900px)");
