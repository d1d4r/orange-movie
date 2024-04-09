import MoviesList from "@/components/movies/MoviesList";
import {
  discoverMovies,
  getAllMovies,
  getDynamicMovies,
} from "@/data/api/movies";
import api from "@/lib/axios";
import React, { Suspense } from "react";
export default async function page({ searchParams }) {

  let { sort_by, with_genres, year, page, type } = searchParams;

  console.log("🚀 ~ page ~ searchParams:", searchParams);
  // if (sort_by || vote_average || with_genres || year || page || type isNaN(page)) {
  //   type = "top_rated";
  //   page = 1;
  // }

  const { data, totalPages, error } = await discoverMovies({
    sort_by,
    vote_average: 0,
    with_genres,
    year,
    page,
  });

  return data ? (
    <MoviesList movies={data} totalPages={totalPages} />
  ) : (
    <p>{JSON.stringify(error)}</p>
  );
}
