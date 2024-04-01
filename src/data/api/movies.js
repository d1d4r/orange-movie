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

export const getDynamicMovies = async (segment) => {
  console.log("🚀 ~ getDynamicMovies ~ segment:", segment);
  const res = await api.get(`movie/${segment}?page=2`);
  return { data: res.data.results, totalPages: res.data.total_pages };
};
