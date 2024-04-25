import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getYear } from "@/lib/formater";
import ImageFallback from "./ImageFallback";

export default function SearchCard({ movie, path = "movies" }) {
  return (
    <Link
      className="w-full transition-all border hover:bg-foreground/10"
      href={`/${path}/${movie.id}`}
    >
      <div className="grid grid-cols-3 grid-rows-1 gap-2">
        <div className="col-start-1 place-self-center row-start-1 h-[5rem] bg-foreground/80">
          <ImageFallback
            className="object-cover  select-none w-[8rem] h-full animate-shade rounded-md"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={128}
            height={80}
            alt="alt"
          />
        </div>
        <div className="col-span-2 row-start-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
            {path === "movies" ? movie.title : movie.name} |
            {path === "movies"
              ? getYear(movie.release_date)
              : getYear(movie.first_air_date)}
          </h3>
          <p className="line-clamp-3 ">{movie.overview}</p>
        </div>
      </div>
    </Link>
  );
}
