"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import ActorCard from "./ActorCard";

export default function SwiperActors({ title, data, href }) {
  return (
    <div className="p-5">
      <div className="flex justify-between mb-2">
        <h2 className="text-2xl">{title}</h2>
        <Link href={href}>see more +</Link>
      </div>
      <Swiper spaceBetween={10} slidesPerView={5}>
        {data.map((actor) => {
          return (
            <SwiperSlide key={actor.id}>
              <ActorCard actor={actor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

