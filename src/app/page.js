import MovieCarousel from "@/components/movies/MovieCarousel";
import NowPlaying from "@/components/moviesList/NowPlaying";
import PopularMovies from "@/components/moviesList/PopularMovies";
import TopRated from "@/components/moviesList/TopRated";
import UpComing from "@/components/moviesList/UpComing";
import SwiperSkeleton from "@/components/SwiperSkeleton";
import { Suspense } from "react";
export default async function Home() {
  return (
    <>
      <main>
        <MovieCarousel />
        <div className="p-5">
          <Suspense fallback={<SwiperSkeleton />}>
            <NowPlaying />
          </Suspense>
          <Suspense fallback={<SwiperSkeleton />}>
            <TopRated />
          </Suspense>
          <Suspense fallback={<SwiperSkeleton />}>
            <PopularMovies />
          </Suspense>
          <Suspense fallback={<SwiperSkeleton />}>
            <UpComing />
          </Suspense>
        </div>
      </main>
    </>
  );
}

//4IsxHZfbQpe0iawGp50NwpsYE

// const person = {
//   name: "didar",
//   age: 24,
// };

/* <Link
        href={{
          pathname: "/dashbord",
          query: { person: JSON.stringify(person) },
        }}
      >
        dashbord
      </Link> */
