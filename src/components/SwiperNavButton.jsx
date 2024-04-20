import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="w-[40px] flex items-center justify-center h-[50%] bg-gradient-to-r from-black z-20 text-white absolute top-[10%] left-0">
        <button onClick={() => swiper.slidePrev()}>
          <ArrowLeft className="size-10" />
        </button>
      </div>
      <div className="w-[40px] flex items-center justify-center h-[50%] bg-gradient-to-l from-black z-20 text-white absolute top-[10%] right-0">
        <button onClick={() => swiper.slideNext()}>
          <ArrowRight className=" size-10" />
        </button>
      </div>
    </>
  );
};
