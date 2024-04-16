// "use client";
import React from "react";
import MovieCard from "./MovieCard";
import MoviesPagination from "./MoviesPagination";
import Filters from "../filterMovies/Filters";
import { discoverMovies } from "@/data/api/movies";

export default async function MoviesList({
  sort_by,
  with_genres,
  year,
  page,
  type,
  vote_average
}) {
  const { data, totalPages, error } = await discoverMovies({
    sort_by,
    vote_average,
    with_genres,
    year,
    page,
  });

  return (
    <div className="p-5">
      {/* <Filters /> */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center">
        {data.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <MoviesPagination totalPages={totalPages} type={type} />
    </div>
  );
}
