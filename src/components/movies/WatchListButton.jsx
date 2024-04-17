import React from "react";
import { Button } from "../ui/button";
import { Bookmark, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WatchListButton() {
  const checked = false;
  return (
    <Button
      variant="outline"
      className={cn({
        "bg-green-600 border-green-600 text-white": checked,
      })}
    >
      <div className="flex items-center gap-2">
        <div className="text-lg">{checked ? <Check /> : <Bookmark />}</div>
        <div>Watch Later</div>
      </div>
    </Button>
  );
}
