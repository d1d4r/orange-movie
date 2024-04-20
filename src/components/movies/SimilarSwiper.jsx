import React from "react";
import SwiperMovies from "./SwiperMovies";
import { getSimilarMovies } from "@/data/api/movies";

export default async function SimilarSwiper({ movieId }) {
  const similar = await getSimilarMovies(movieId);

  return <SwiperMovies data={similar} title={"Similar Movies"} href="#" />;
}
