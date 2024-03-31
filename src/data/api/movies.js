import api from "@/lib/axios";

export const getPopularMovies = async () => {
  const res = await api.get("popular?language=en-US");
  return res.data.results;
};
export const getTopRatedMovies = async () => {
  const res = await api.get("top_rated?language=en-US");
  return res.data.results;
};
export const getUpComingMovies = async () => {
  const res = await api.get("upcoming?language=en-US");
  return res.data.results;
};
export const getNowPlayMovies = async () => {
  const res = await api.get("now_playing?language=en-US");
  return res.data.results;
};
export const getMovieDetails = async (movie_id) => {
  const res = await api.get(`${movie_id}`);
  return res.data;
};
