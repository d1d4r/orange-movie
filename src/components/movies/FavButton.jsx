import React from "react";
import { Button } from "../ui/button";
import { Check, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { GetFavMovieById } from "@/data/api/account";

export default async function FavButton() {

  const checked = await GetFavMovieById(550);

  return (
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
  );
}
