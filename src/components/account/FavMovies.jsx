import React from "react";
import SwiperMovies from "../movies/SwiperMovies";
import { GetFavMovies } from "@/data/api/account";
export const dynamic = "force-dynamic";
export default async function FavMovies() {
  const fav = await GetFavMovies();

  return <SwiperMovies data={fav} title="favorite" href="#" />;
}
