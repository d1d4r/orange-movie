import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { getNowPlayMovies } from "@/data/api/movies";

export default async function NowPlaying() {
  //await new Promise((resolve) => setTimeout(() => resolve(), 6000));

  const { data, error } = await getNowPlayMovies();

  return data ? (
    <SwiperMovies
      title="Now Playing"
      data={data}
      href="/movies?type=now_playing"
    />
  ) : (
    <p>{error}</p>
  );
}
