import MoviesList from "@/components/movies/MoviesList";
import {
  discoverMovies,
  getAllMovies,
  getDynamicMovies,
} from "@/data/api/movies";
import api from "@/lib/axios";
import React from "react";

export default async function page({ searchParams }) {
  //movie?page=500&sort_by=popularity.desc&vote_average.gte=6&with_genres=28&year=2000
  let { sort_by, with_genres, year, page, type } = searchParams;
  
  console.log("🚀 ~ page ~ searchParams:", searchParams);
  // if (sort_by || vote_average || with_genres || year || page || type isNaN(page)) {
  //   type = "top_rated";
  //   page = 1;
  // }
  const { data, totalPages } = await discoverMovies({
    sort_by,
    vote_average: 0,
    with_genres,
    year,
    page,
  });

  return <MoviesList movies={data} totalPages={totalPages} />;
}
