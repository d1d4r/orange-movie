import api from "@/lib/axios";

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
