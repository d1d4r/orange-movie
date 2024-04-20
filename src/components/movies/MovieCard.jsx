import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavButton from "./FavButton";
import ImageFallback from "./ImageFallback";
import { getYear, roundToOneDecimalPlace } from "@/lib/formater";
import { getGenreById } from "@/data/api/movies";
import { Vote } from "lucide-react";

export default async function MovieCard({ movie }) {

  return (
    <div>
      <Link
        className="flex flex-col transition-all h-96 hover:scale-90"
        href={`/movies/${movie.id}`}
      >
        <div className="bg-gray-100 w-fit">
          <Image
            className="object-cover  select-none h-[18rem] animate-shade"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={300}
            height={300}
            alt="alt"
          />
        </div>
        <div className="z-10">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
            {movie.original_title}
          </h3>
          <div className="flex mt-2 text-gray-500 dark:text-gray-400">
            <p className="">
              {getYear(movie.release_date)}|
            </p>
            <div className="flex">
              <Vote />
              <p>{roundToOneDecimalPlace(movie.vote_average)}</p>
            </div>
          </div>
        </div>
      </Link>
      {/* <FavButton movieId={movie.id} /> */}
    </div>
  );
}
