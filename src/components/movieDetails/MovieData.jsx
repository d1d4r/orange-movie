import React from "react";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import { getMovieDetails } from "@/data/api/movies";

export default async function MovieData({movieId}) {
  const data = await getMovieDetails(movieId);

  return (
    <>
      <MoviePoster
        backdrop_path={data.backdrop_path}
        original_title={data.original_title}
        runtime={data.runtime}
        release_date={data.release_date}
        movieId={movieId}
      />
      <MovieInfo
        vote_average={data.vote_average}
        release_date={data.release_date}
        budget={data.budget}
        overview={data.overview}
        language={data.spoken_languages[0].name}
        genres={data.genres}
      />
    </>
  );
}
