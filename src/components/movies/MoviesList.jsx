"use client";
import React from "react";
import MovieCard from "./MovieCard";
import MoviesPagination from "./MoviesPagination";

export default function MoviesList({ movies, totalPages, type }) {
  return (
    <div>
      <div className="grid grid-cols-5 p-5">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <MoviesPagination totalPages={totalPages} type={type} />
    </div>
  );
}
