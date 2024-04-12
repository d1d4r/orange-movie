import Filters from "@/components/filterMovies/Filters";
import MoviesList from "@/components/movies/MoviesList";
import Skeleton from "@/components/movies/Skeleton";
import {
  discoverMovies,
  getAllMovies,
  getDynamicMovies,
} from "@/data/api/movies";
import api from "@/lib/axios";
import React, { Suspense } from "react";

export default async function page({ searchParams }) {
  let { sort_by, with_genres, year, page, type } = searchParams;

  //console.log("🚀 ~ page ~ searchParams:", searchParams);
  // if (sort_by || vote_average || with_genres || year || page || type isNaN(page)) {
  //   type = "top_rated";
  //   page = 1;
  // }

  // const { data, totalPages, error } = await discoverMovies({
  //   sort_by,
  //   vote_average: 0,
  //   with_genres,
  //   year,
  //   page,
  // });

  return (
    <div key={Math.random()}>
      {/* <Skeleton/> */}
      <Filters />
      <p className="px-5 text-4xl">MOVIES</p>
      <Suspense fallback={<Skeleton />}>
        <MoviesList
          sort_by={sort_by}
          with_genres={with_genres}
          year={year}
          page={page}
        />
      </Suspense>
    </div>
  );
}
