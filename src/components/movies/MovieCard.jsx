import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MovieCard({ movie }) {
  return (
    <Link
      className="flex flex-col transition-all h-96 hover:scale-90"
      href={`/movies/${movie.id}`}
    >
      <div className="bg-gray-100 w-fit">
        <Image 
          width={300}
          height={300}
          className="object-cover  select-none h-[18rem] animate-shade"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="Image Description"
        />
      </div>
      <div className="z-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white line-clamp-1">
          {movie.original_title}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Some quick</p>
      </div>
    </Link>
  );
}
