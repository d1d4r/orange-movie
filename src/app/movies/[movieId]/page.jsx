import { getMovieDetails } from "@/data/api/movies";
import api from "@/lib/axios";
import React from "react";
import Image from "next/image";
import MoviePoster from "@/components/movieDetails/MoviePoster";
import MovieInfo from "@/components/movieDetails/movieInfo";

export default async function MovieDetails({ params }) {
  const data = await getMovieDetails(params.movieId);

  return (
    <div>
      <MoviePoster
        backdrop_path={data.backdrop_path}
        original_title={data.original_title}
      />
      <MovieInfo
        vote_average={data.vote_average}
        release_date={data.release_date}
        budget={data.budget}
        overview={data.overview}
        language={data.spoken_languages[0].name}
      />
      
    </div>
  );
}
