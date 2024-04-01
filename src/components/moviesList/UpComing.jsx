import React from "react";
import api from "@/lib/axios";
import SwiperMovies from "../movies/SwiperMovies";
import { getUpComingMovies } from "@/data/api/movies";

export default async function UpComing() {
  const res = await api.get("upcoming?language=en-US");
  const data = await getUpComingMovies();

  return (
    <SwiperMovies
      title="Up Coming"
      data={data}
      href="/movies?type=upcoming"
    ></SwiperMovies>
  );
}
