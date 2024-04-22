"use client";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { deleteWatchList } from "@/actions/deleteWatchList";
import { addWatchList } from "@/actions/addWatchList";

export default function ActionWatchButton({ checked, children, movieId }) {
  return (
    <>
      {checked ? (
        <Button
          type="submit"
          onClick={() => deleteWatchList(movieId)}
          variant="outline"
          className={cn("bg-green-600 border-green-600 text-white")}
        >
          {children}
        </Button>
      ) : (
        <Button type="submit" onClick={() => addWatchList(movieId)}>
          {children}
        </Button>
      )}
    </>
  );
}
