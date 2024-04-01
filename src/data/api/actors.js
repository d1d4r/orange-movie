import api from "@/lib/axios";

export async function getAllActors() {
  const res = await api.get(`person/popular?language=en-US&`);
  return res.data.results;
}
