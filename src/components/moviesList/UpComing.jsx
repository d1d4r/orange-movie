import React from "react";
import api from "@/lib/axios";
import SwiperMovies from "../movies/SwiperMovies";
import { getUpComingMovies } from "@/data/api/movies";

export default async function UpComing() {
  const { data, error } = await getUpComingMovies();

  return data ? (
    <SwiperMovies title="Up Coming" data={data} href="/movies?type=upcoming" />
  ) : (
    <p>{error}</p>
  );
}
