import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { GetFavMovies } from "@/data/api/account";
import { unstable_noStore as noStore } from 'next/cache';

export default async function FavMovies() {
  noStore();
  const fav = await GetFavMovies();

  return <SwiperMovies data={fav} title="favorite" href="#" />;
}
