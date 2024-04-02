import MoviesList from "@/components/movies/MoviesList";
import { getDynamicMovies } from "@/data/api/movies";
import api from "@/lib/axios";
import React from "react";

export default async function page({ searchParams }) {
  let { type, page } = searchParams;
  if (!type || isNaN(page)) {
    type = "popular";
    page = 1;
  }
  const { data, totalPages } = await getDynamicMovies({ type, page });
  return <MoviesList movies={data} totalPages={totalPages} type={type} />;
}
