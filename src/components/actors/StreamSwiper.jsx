import React, { Suspense } from "react";
import SwiperActors from "./SwiperActors";
import { ActorsInMovie } from "@/data/api/movies";

export default async function StreamSwiper({ movieId }) {

  const actors = await ActorsInMovie(movieId);

  return <SwiperActors data={actors} title={"Cast"} href="#" />;
}
