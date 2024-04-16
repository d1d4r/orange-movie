import React, { Suspense } from "react";
import SwiperActors from "./SwiperActors";
import { ActorsInMovie } from "@/data/api/movies";

export default async function StreamSwiper({ id }) {
  await new Promise((resolve) => setTimeout(() => resolve(), 6000));

  const actors = await ActorsInMovie(id);

  return <SwiperActors data={actors} title={"Cast suspense"} href="#" />;
}
