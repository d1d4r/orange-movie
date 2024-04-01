import MoviesList from "@/components/movies/MoviesList";
import { getDynamicMovies } from "@/data/api/movies";
import api from "@/lib/axios";
import React from "react";

export default async function page({ searchParams }) {
  const { type } = searchParams;
  const { data, totalPages } = await getDynamicMovies(type);
  return <MoviesList movies={data} totalPages={totalPages} />;
}
