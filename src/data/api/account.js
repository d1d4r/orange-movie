import api from "@/lib/axios";
import axios from "axios";

export async function GetFavMovies() {
  const res = await api.get("account/21156670/favorite/movies");
  return res.data.results;
}

export async function GetFavMovieById(movieId) {
  try {
    const res = await api.get("account/21156670/favorite/movies");
    const movieIds = res.data.results.map((movie) => movie.id); 
    return movieIds.includes(movieId); 
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    throw error; 
  }
}

export async function GetFavMovieByIdd(movieId) {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/account/21156670/favorite/movies",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer `,
        },
      }
    );
    const movieIds = res.data.results.map((movie) => movie.id); 
    return movieIds.includes(movieId); 
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    throw error; 
  }
}

export async function GetWatchListMovies() {
  const res = await api.get("account/21156670/watchlist/movies");
  return res.data.results;
}

export async function GetWatchListMoviesId(movieId) {
  try {
    const res = await api.get("account/21156670/watchlist/movies");
    const movieIds = res.data.results.map((movie) => movie.id); 
    return movieIds.includes(movieId); 
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    return false; 
  }
}
