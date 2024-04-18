"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Check, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { GetFavMovieByIdd } from "@/data/api/account";
import { usePathname } from "next/navigation";
import { addFav } from "@/actions/addFav";

export default function FavButton() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(null);

  const pathname = usePathname();

  const pathArray = pathname.split("/");
  const movieId = pathArray[pathArray.length - 1]

  async function fetchData() {
    try {
      const res = await GetFavMovieByIdd(+movieId);
      setChecked(res);
      // const res = await axios.get(
      //   "https://jsonplaceholder.typicode.coms/todos/1"
      // );

      // setChecked(res.data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="p-2 text-red-700 bg-white">
        {error.code}:{error.message}
      </div>
    );
  }

  return (
    <form action={addFav}>
      <Button
        className={cn({
          "bg-blue-600 border-blue-600 text-white": checked,
        })}
      >
        <div className="flex items-center gap-2">
          <div className="text-lg">{checked ? <Check /> : <Heart />}</div>
          <div>Favorite</div>
        </div>
      </Button>
    </form>
  );
}

// export async function GetFavMovieById(movieId) {
//   try {
//     const res = await api.get("account/21156670/favorite/movies");
//     const movieIds = res.data.results.map((movie) => movie.id); // Extract movie IDs
//     return movieIds.includes(movieId); // Check if movie ID exists in favorites
//   } catch (error) {
//     console.error("Error fetching favorite movies:", error);
//     throw error // Indicate error if fetching fails
//   }
// }
