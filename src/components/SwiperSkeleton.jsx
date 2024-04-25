"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Skeleton } from "./ui/skeleton";
import { SwiperNavButtons } from "./SwiperNavButton";

export default function SwiperSkeleton() {
  const skiltons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="flex items-center justify-between border text-foreground/60">
        <h2 className="text-2xl">loading...</h2>
        <SwiperNavButtons />
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={5}
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
        {skiltons.map((skilton) => {
          return (
            <SwiperSlide key={skilton}>
              <div className="flex flex-col space-y-3 border h-96">
                <Skeleton className="w-full h-full " />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

// const isLarge = useMediaQuery("(min-width: 900px)");
