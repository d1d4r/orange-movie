"use client";
import React from "react";
import { Button } from "../ui/button";
import { Youtube } from "lucide-react";
import Modal from "../Modal";
import { formatHoursAndMinutes, getYear } from "@/lib/formater";

export default function MoviePoster({
  original_title,
  backdrop_path,
  runtime,
  release_date,
}) {
  return (
    <div className="h-[60vh] md:h-[80vh] grid grid-rows-1 grid-cols-1 ">
      <div className="z-10 col-start-1 row-start-1 bg-gradient-to-b from-black "></div>
      <img
        className="object-cover col-start-1 row-start-1 select-none size-full"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="poster"
      />
      <div className="z-20 flex flex-col self-center col-start-1 row-start-1 m-5 h-1/2 justify-self-center ">
        <p className="text-4xl text-white">{original_title}</p>
        <p className="m-auto text-2xl text-white">
          {formatHoursAndMinutes(runtime)} | {getYear(release_date)}
        </p>
        <Button
          variant="destructive"
          className="m-auto space-x-1"
          onClick={() => modal.showModal()}
        >
          <Youtube />
          <span>trailare</span>
        </Button>
      </div>
    </div>
  );
}
