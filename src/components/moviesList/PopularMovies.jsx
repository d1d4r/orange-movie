import React from "react";

import SwiperMovies from "../movies/SwiperMovies";
import { getPopularMovies } from "@/data/api/movies";

export default async function PopularMovies() {
  const data = await getPopularMovies();
  return (
    <SwiperMovies
      title="Popular Movies"
      data={data}
      href="/movies?type=popular"
    ></SwiperMovies>
  );
}
