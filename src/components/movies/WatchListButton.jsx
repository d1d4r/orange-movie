import React from "react";
import { Bookmark, Check } from "lucide-react";
import ActionWatchButton from "../ActionWatchButton";
import { GetAccountStates } from "@/data/api/movies";

export default async function WatchListButton({ movieId }) {
  const { watchlist: checked } = await GetAccountStates(movieId);

  return (
    <ActionWatchButton movieId={movieId} checked={checked}>
      <div className="flex items-center gap-2">
        <div className="text-lg">{checked ? <Check /> : <Bookmark />}</div>
        <div>Watch List</div>
      </div>
    </ActionWatchButton>
  );
}
