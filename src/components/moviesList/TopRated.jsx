import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { getTopRatedMovies } from "@/data/api/movies";

export default async function TopRated() {
 // await new Promise((resolve) => setTimeout(() => resolve(), 6000));

  const { data, error } = await getTopRatedMovies();
  return (
    data ? <SwiperMovies title="Top Rated" data={data} href="/movies?type=top_rated" /> :  <p>{error}</p>
  );
}
