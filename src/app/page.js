import MovieCarousel from "@/components/movies/MovieCarousel";
import NowPlaying from "@/components/moviesList/NowPlaying";
import PopularMovies from "@/components/moviesList/PopularMovies";
import TopRated from "@/components/moviesList/TopRated";
import UpComing from "@/components/moviesList/UpComing";
import SwiperSkeleton from "@/components/SwiperSkeleton";
import Link from "next/link";
import { Suspense } from "react";

const person = {
  name: "didar",
  age: 24,
};
export default async function Home() {
  return (
    <div>
      <MovieCarousel />
      {/* <Link
        href={{
          pathname: "/dashbord",
          query: { person: JSON.stringify(person) },
        }}
      >
        dashbord
      </Link> */}
      <main className="space-y-5">
        <Suspense fallback={<SwiperSkeleton />}>
          <NowPlaying />
        </Suspense>
        <Suspense fallback={<SwiperSkeleton />}>
          <TopRated />
        </Suspense>

        <PopularMovies />
        <UpComing />
      </main>
    </div>
  );
}

//4IsxHZfbQpe0iawGp50NwpsYE
