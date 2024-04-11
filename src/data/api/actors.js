import api from "@/lib/axios";

export async function getAllActors(page = 1) {
  const res = await api.get(`person/popular?page=${page}`);
  return res.data.results;
}
export async function ActorHasMovie(id) {
  const res = await api.get(`person/${id}/movie_credits`);

  return res.data;
}
