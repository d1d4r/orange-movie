import React, { Suspense } from "react";
import { Youtube } from "lucide-react";
import { formatHoursAndMinutes, getYear } from "@/lib/formater";
import FavButton from "../movies/FavButton";
import WatchListButton from "../movies/WatchListButton";
import TrailerButton from "../movies/TrailerButton";
import Image from "next/image";

export default function MoviePoster({
  original_title,
  backdrop_path,
  runtime,
  release_date,
}) {
  return (
    <div className="h-[60vh] md:h-[80vh] grid grid-rows-1 grid-cols-1 ">
      <div className="z-10 col-start-1 row-start-1 bg-gradient-to-b from-black "></div>
      <Image
        height={700}
        width={700}
        className="object-cover col-start-1 row-start-1 select-none size-full"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="poster"
      />
      <div className="z-20 flex flex-col self-center col-start-1 row-start-1 m-5 h-1/2 justify-self-center ">
        <p className="text-4xl text-center text-white">{original_title}</p>
        <p className="m-auto text-2xl text-white">
          {formatHoursAndMinutes(runtime)} | {getYear(release_date)}
        </p>
        <TrailerButton />
        <div className="flex items-center justify-center gap-2">
          <WatchListButton />
          <FavButton />
        </div>
      </div>
    </div>
  );
}
