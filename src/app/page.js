import MovieCarousel from "@/components/movies/MovieCarousel";
import NowPlaying from "@/components/moviesList/NowPlaying";
import PopularMovies from "@/components/moviesList/PopularMovies";
import TopRated from "@/components/moviesList/TopRated";
import UpComing from "@/components/moviesList/UpComing";

export default async function Home() {
  return (
    <div>
      <MovieCarousel />
     
      <main className="space-y-10">
        <PopularMovies />
        <NowPlaying />
        <TopRated />
        {/* 
        <UpComing /> 
        
        */}
      </main>
    </div>
  );
}
