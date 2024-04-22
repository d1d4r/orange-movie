import React from "react";

import SwiperMovies from "../movies/SwiperMovies";
import { getPopularMovies } from "@/data/api/movies";

export default async function PopularMovies() {

  const { data, error } = await getPopularMovies();
  return data ? (
    <SwiperMovies
      title="Popular Movies"
      data={data}
      href="/movies?type=popular"
    />
  ) : (
    <p>{error}</p>
  );
}
