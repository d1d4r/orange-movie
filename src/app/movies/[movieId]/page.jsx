import {
  ActorsInMovie,
  getMovieDetails,
  getSimilarMovies,
} from "@/data/api/movies";
import React, { lazy, Suspense } from "react";
import MoviePoster from "@/components/movieDetails/MoviePoster";
import MovieInfo from "@/components/movieDetails/MovieInfo";
import SwiperActors from "@/components/actors/SwiperActors";
import SwiperMovies from "@/components/movies/SwiperMovies";
const MyLazyComponent = lazy(() => import("@/components/Modal"));

export default async function MovieDetails({ params }) {
  const data = await getMovieDetails(params.movieId);
  const actors = await ActorsInMovie(params.movieId);
  const similar = await getSimilarMovies(params.movieId);

  return (
    <div>
      <Suspense fallback={<div>Loading modal...</div>}>
        <MyLazyComponent id={params.movieId} />
      </Suspense>

      <MoviePoster
        backdrop_path={data.backdrop_path}
        original_title={data.original_title}
        runtime={data.runtime}
        release_date={data.release_date}
      />
      <MovieInfo
        vote_average={data.vote_average}
        release_date={data.release_date}
        budget={data.budget}
        overview={data.overview}
        language={data.spoken_languages[0].name}
      />
      <Suspense fallback={<div>Loading modal...</div>}>
        <SwiperActors data={actors} title={"Cast"} href="#" />
      </Suspense>
      <SwiperMovies data={similar} title={"Similar Movies"} href="#" />
    </div>
  );
}
