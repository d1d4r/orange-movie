// "use client";
import React from "react";
import MovieCard from "./MovieCard";
import MoviesPagination from "./MoviesPagination";
import Filters from "../filterMovies/Filters";

export default function MoviesList({ movies, totalPages, type }) {
  return (
    <div className="p-5">
      <Filters />
      <p className="my-4 text-4xl">MOVIES</p>
      <div className="grid grid-cols-5 ">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <MoviesPagination totalPages={totalPages} type={type} />
    </div>
  );
}
