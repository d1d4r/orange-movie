import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { getNowPlayMovies } from "@/data/api/movies";

export default async function NowPlaying() {
  const data = await getNowPlayMovies();

  return (
    <SwiperMovies
      title="Now Playing"
      data={data}
      href="/movies?type=now_playing"
    ></SwiperMovies>
  );
}
