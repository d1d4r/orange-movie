import MoviesList from "@/components/movies/MoviesList";
import { getAllMovies, getDynamicMovies } from "@/data/api/movies";
import api from "@/lib/axios";
import React from "react";

export default async function page({ searchParams }) {
  let { type, page } = searchParams;

  if (!type && isNaN(page)) {
    type = "top_rated";
    page = 1;
  }
  const { data, totalPages = 500 } = await getDynamicMovies({ type, page });

  return <MoviesList movies={data} totalPages={totalPages} type={type} />;
}
