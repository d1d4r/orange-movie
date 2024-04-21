"use server";

import api from "@/lib/axios";
import { revalidatePath } from "next/cache";

export async function deleteFav(movieId) {
  await api.post("account/21156670/favorite", {
    media_type: "movie",
    media_id: movieId,
    favorite: false,
  });
  revalidatePath(`/movies/${movieId}`);
 // revalidateTag(tag)
}
