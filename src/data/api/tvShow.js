import api from "@/lib/axios";

export const discoverTvs = async ({
  sort_by = "popularity.desc",
  vote_average = "",
  with_genres = "",
  year = "",
  page = 1,
}) => {
  try {
    const res = await api.get(
      `discover/tv?page=${page}&year=${year}&sort_by=${sort_by}&vote_average.gte=${vote_average}&with_genres=${with_genres}`
    );
    return { data: res.data.results, totalPages: res.data.total_pages };
  } catch (error) {
    return { error: error.code };
  }
};
