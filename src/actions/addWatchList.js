"use server";

import api from "@/lib/axios";
import { revalidatePath } from "next/cache";

export async function addWatchList(movieId) {
  await api.post("account/21156670/watchlist", {
    media_type: "movie",
    media_id: movieId,
    watchlist: true,
  });
  revalidatePath(`/movies/${movieId}`);
}
