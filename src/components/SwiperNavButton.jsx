'use client'
import { ArrowLeft, ArrowRight } from "lucide-react";

export const SwiperNavButtons = ({ onClickNext, onClickPrev }) => {

  return (
    <div className="flex gap-2">
      <button onClick={onClickPrev}>
        <ArrowLeft className="rounded-full size-5 bg-foreground/20" />
      </button>
      <button onClick={onClickNext}>
        <ArrowRight className="rounded-full size-5 bg-foreground/20" />
      </button>
    </div>
  );
};
