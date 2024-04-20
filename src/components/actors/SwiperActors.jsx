"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import ActorCard from "./ActorCard";
import { MoveRight } from "lucide-react";

export default function SwiperActors({ title, data, href }) {
  return (
    <>
      <div className="flex justify-between mb-2 text-foreground/60">
        <h2 className="text-2xl">{title}</h2>
        {href !== "#" ? (
          <Link
            href={href}
            className="flex items-center justify-between gap-2 text-xl group hover:text-foreground/80"
          >
            <span>see more</span>
            <MoveRight className="transition-all size-6 group-hover:translate-x-2 " />
          </Link>
        ) : (
          <></>
        )}
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
        {data?.map((actor) => {
          return (
            <SwiperSlide key={actor.id}>
              <ActorCard actor={actor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
