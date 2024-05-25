import Filters from "@/components/filterMovies/Filters";
import Skeleton from "@/components/movies/Skeleton";
import TvList from "@/components/movies/TvList";
import React, { Suspense } from "react";
import { v4 as uuid } from "uuid";

export default async function TvShowsPage({ searchParams }) {
  let { sort_by, with_genres, year, page, vote_average, type } = searchParams;

  return (
    <div key={uuid()}>
      <Filters href='/tv-show'/>
      <p className="px-5 text-4xl">TV SHOWS</p>
      <Suspense fallback={<Skeleton />}>
        <TvList
          sort_by={sort_by}
          with_genres={with_genres}
          year={year}
          page={page}
          vote_average={vote_average}
        />
      </Suspense>
    </div>
  );
}
