import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import StreamSwiper from "@/components/actors/StreamSwiper";
import SwiperSkeleton from "@/components/SwiperSkeleton";
import MovieData from "@/components/movieDetails/MovieData";
import SimilarSwiper from "@/components/movies/SimilarSwiper";
import PortalButton from "@/components/PortalButton";

const MyLazyComponent = dynamic(() => import("@/components/Modal"));

export default async function MovieDetails({ params }) {
  return (
    <>
      <div>
        {/* <PortalButton /> */}
        <MyLazyComponent id={params.movieId} />
        <MovieData movieId={params.movieId} />
        <div className="p-5 space-y-6">
          <Suspense fallback={<SwiperSkeleton />}>
            <StreamSwiper movieId={params.movieId} />
          </Suspense>
          <Suspense fallback={<SwiperSkeleton />}>
            <SimilarSwiper movieId={params.movieId} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

//await new Promise((resolve) => setTimeout(() => resolve(), 6000));
//const data = await getMovieDetails(params.movieId);

//const similar = await getSimilarMovies(params.movieId);
//const actors = await ActorsInMovie(params.movieId);

/* <SwiperActors data={actors} title={"Cast"} href="#" /> */

/* <SwiperMovies data={similar} title={"Similar Movies"} href="#" /> */

/* <MoviePoster
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
/> */
