"use server";

import api from "@/lib/axios";

export async function addFav(formData) {
  await api.post("account/21156670/favorite", {
    media_type: "movie",
    media_id: 234,
    favorite: true,
  });
}
