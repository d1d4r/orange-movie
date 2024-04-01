import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { getTopRatedMovies } from "@/data/api/movies";

export default async function TopRated() {
  const data = await getTopRatedMovies();
  return (
    <SwiperMovies
      title="Top Rated"
      data={data}
      href="/movies?type=top_rated"
    ></SwiperMovies>
  );
}
