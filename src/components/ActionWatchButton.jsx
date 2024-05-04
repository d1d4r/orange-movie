"use client";
import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { deleteWatchList } from "@/actions/deleteWatchList";
import { addWatchList } from "@/actions/addWatchList";

export default function ActionWatchButton({ checked, children, movieId }) {
  const [isPending, startTransition] = useTransition();

  const onAdd = () => {
    startTransition(async () => {
      await addWatchList(movieId);
    });
  };

  const onDelete = () => {
    startTransition(async () => {
      await deleteWatchList(movieId);
    });
  };

  return (
    <>
      {checked ? (
        <Button
          disabled={isPending}
          type="submit"
          onClick={onDelete}
          variant="outline"
          className={cn("bg-green-600 border-green-600 text-white")}
        >
          {children}
        </Button>
      ) : (
        <Button disabled={isPending} type="submit" onClick={onAdd}>
          {children}
        </Button>
      )}
    </>
  );
}
