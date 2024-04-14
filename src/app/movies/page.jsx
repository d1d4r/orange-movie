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

import { v4 as uuid } from 'uuid';


export default async function page({ searchParams }) {
  let { sort_by, with_genres, year, page, type } = searchParams;


  return (
    <div key={uuid()}>

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
