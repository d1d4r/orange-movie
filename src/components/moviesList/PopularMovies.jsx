import React from "react";

import SwiperMovies from "../movies/SwiperMovies";
import { getPopularMovies } from "@/data/api/movies";

export default async function PopularMovies() {
  //await new Promise((resolve) => setTimeout(() => resolve(), 6000));

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
