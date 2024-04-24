import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getYear, roundToOneDecimalPlace } from "@/lib/formater";
import { Vote } from "lucide-react";
import ImageFallback from "./ImageFallback";

export default function SearchCard({ movie }) {
  return (
    <Link
      className="flex flex-row transition-all w-[600px] gap-4 borde hover:bg-foreground/10  p-2 "
      href={`/movies/${movie.id}`}
    >
      {/* <Image
        className="object-cover select-none w-[12rem] h-[6rem] animate-shade rounded-md"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        width={192}
        height={96}
        alt="alt"
      /> */}
      <ImageFallback
        className="object-cover select-none w-[12rem] h-[6rem] animate-shade rounded-md"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        width={192}
        height={96}
        alt="alt"
      />

      <div className="z-10 ">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
          {movie.original_title} | {getYear(movie.release_date)}
          {/* panda */}
        </h3>
        <div className="flex flex-col text-gray-500 dark:text-gray-400">
          {/* <p className="">
            2022
            {getYear(movie.release_date)}
          </p> */}
          <p className="line-clamp-3">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            repellendus tempora assumenda eligendi ipsam et placeat quia rem
            explicabo maxime. */}
            {movie.overview}
          </p>
        </div>
      </div>
    </Link>
  );
}
