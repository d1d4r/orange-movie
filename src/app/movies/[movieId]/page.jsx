import { getMovieDetails } from "@/data/api/movies";
import api from "@/lib/axios";
import React from "react";

export default async function MovieDetails({ params }) {
  const data = await getMovieDetails(params.movieId);
  console.log("🚀 ~ MovieDetails ~ data:", data);
  return <div>{params.movieId}</div>;
}
