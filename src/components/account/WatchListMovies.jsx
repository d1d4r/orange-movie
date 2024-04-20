import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { GetWatchListMovies } from "@/data/api/account";

export default async function WatchListMovies() {
  const watchList = await GetWatchListMovies();

  return <SwiperMovies data={watchList} title="Watch List" href="#" />;
}
