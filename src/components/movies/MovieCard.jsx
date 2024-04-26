import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavButton from "./FavButton";
import ImageFallback from "./ImageFallback";
import { getYear, roundToOneDecimalPlace } from "@/lib/formater";
import { getGenreById } from "@/data/api/movies";
import { Vote } from "lucide-react";

export default async function MovieCard({ movie, path = "movies" }) {
 
  return (
    <div>
      <Link
        className="flex flex-col transition-all h-96 sm:hover:scale-90"
        href={`/${path}/${movie.id}`}
      >
        <div className="bg-gray-100 w-fit ">
          <ImageFallback
            className="object-cover  select-none h-[18rem]  transition-opacity duration-1000"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={300}
            height={300}
            alt="alt"
          />
        </div>
        <div className="z-10">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
            {path === "movies" ? movie.title : movie.name}
          </h3>
          <div className="flex mt-2 text-gray-500 dark:text-gray-400">
            <p className="">
              {path === "movies"
                ? getYear(movie.release_date)
                : getYear(movie.first_air_date)}
              |
            </p>
            <div className="flex">
              <Vote />
              <p>{roundToOneDecimalPlace(movie.vote_average)}</p>
            </div>
          </div>
        </div>
      </Link>
      {/* <FavButton movieId={movie.id} /> first_air_date */}
    </div>
  );
}
