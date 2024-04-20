import api from "@/lib/axios";
import axios from "axios";

export async function GetFavMovies() {
  const res = await api.get("account/21156670/favorite/movies");
  console.log("🚀 ~ GetFavMovies ~ res.data.results:", res.data.results);
  return res.data.results;
}

export async function GetFavMovieById(movieId) {
  try {
    const res = await api.get("account/21156670/favorite/movies");
    const movieIds = res.data.results.map((movie) => movie.id); // Extract movie IDs
    return movieIds.includes(movieId); // Check if movie ID exists in favorites
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    throw error; // Indicate error if fetching fails
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
    console.log("🚀 ~ GetFavMovieByIdd ~ res.data.results:", res.data.results);
    const movieIds = res.data.results.map((movie) => movie.id); // Extract movie IDs
    return movieIds.includes(movieId); // Check if movie ID exists in favorites
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    throw error; // Indicate error if fetching fails
  }
}

export async function GetWatchListMovies() {
  const res = await api.get("account/21156670/watchlist/movies");
  console.log("🚀 ~ GetFavMovies ~ res.data.results:", res.data.results);
  return res.data.results;
}

export async function GetWatchListMoviesId(movieId) {
  try {
    const res = await api.get("account/21156670/watchlist/movies");
    const movieIds = res.data.results.map((movie) => movie.id); // Extract movie IDs
    return movieIds.includes(movieId); // Check if movie ID exists in favorites
  } catch (error) {
    console.error("Error fetching favorite movies:", error);
    return false; // Indicate error if fetching fails
  }
}
