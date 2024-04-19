"use server";

import api from "@/lib/axios";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addFav(movieId) {
  await api.post("account/21156670/favorite", {
    media_type: "movie",
    media_id: movieId,
    favorite: true,
  });
  revalidatePath(`/movies`);
 // revalidateTag(tag)
}
