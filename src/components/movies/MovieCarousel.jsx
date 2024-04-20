"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function MovieCarousel() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-2 md:pl-4">
          <div className="w-full bg-primary size-96"></div>
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
          <div className="w-full bg-secondary size-96"></div>
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
          <div className="w-full bg-foreground size-96"></div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
