import api from "@/lib/axios";

export const discoverMovies = async ({
  sort_by = "popularity.desc",
  vote_average = "",
  with_genres = "",
  year = "",
  page = 1,
}) => {
  console.log("🚀 ~ params", +with_genres, vote_average, year, page);
  try {
    const res = await api.get(
      `discover/movie?page=${page}&sort_by=${sort_by}&vote_average.gte=${vote_average}&with_genres=${with_genres}`
    );
    return { data: res.data.results, totalPages: res.data.total_pages };
  } catch (error) {
    return { error: error.code };
    console.log("🚀 ~ error:", error);
  }
};
export const getPopularMovies = async () => {
  const res = await api.get("movie/popular?language=en-US");
  return res.data.results;
};
export const getTopRatedMovies = async () => {
  const res = await api.get("movie/top_rated?language=en-US");
  return res.data.results;
};
export const getUpComingMovies = async () => {
  const res = await api.get("movie/upcoming?language=en-US");
  return res.data.results;
};
export const getNowPlayMovies = async () => {
  const res = await api.get("movie/now_playing?language=en-US");
  return res.data.results;
};
export const getAllMovies = async () => {
  try {
    const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all(
      [getPopularMovies(), getTopRatedMovies(), getNowPlayMovies()]
    );
    const all = [...popularMovies, ...topRatedMovies, ...nowPlayingMovies];

    return all;
  } catch (error) {
    // Handle error
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error if needed
  }
};
export const getMovieDetails = async (movie_id) => {
  const res = await api.get(`movie/${movie_id}`);
  return res.data;
};

export const getDynamicMovies = async ({ type, page = 1 }) => {
  const res = await api.get(`movie/${type}?page=${page}`);
  return { data: res.data.results, totalPages: res.data.total_pages };
};

export async function ActorsInMovie(id) {
  const res = await api.get(`movie/${id}/credits`);
  return res.data.cast;
}

export async function getSimilarMovies(id) {
  const res = await api.get(`movie/${id}/similar?page=1`);
  return res.data.results;
}

export async function getTrailerMovie(id) {
  const res = await api.get(`movie/${id}/videos`);
  return res.data.results[0]?.key;
}

export async function genresList() {
  const res = await api.get("/genre/movie/list");
  const mapedRes = res.data.genres.map((genre) => {
    return { value: genre.id.toString(), label: genre.name };
  });
  return mapedRes;
}

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
//   },
// };

// export async function genresList2() {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/genre/movie/list?language=en",
//     options
//   );
//   const data = await res.json();
//   const mapedRes = data.genres.map((genre) => {
//     return { value: genre.id, label: genre.name };
//   });
//   return mapedRes;
//   return data;
// }
