"use client";
import React, { useTransition } from "react";
import { Button } from "./ui/button";
import { addFav } from "@/actions/addFav";
import { cn } from "@/lib/utils";
import { deleteFav } from "@/actions/deleteFav";

export default function ActionButton({ children, movieId, checked }) {
  const [isPending, startTransition] = useTransition();

  const onAdd = () => {
    startTransition(async () => {
      await addFav(movieId);
    });
  };

  const onDelete = () => {
    startTransition(async () => {
      await deleteFav(movieId);
    });
  };

  return (
    <>
      {checked ? (
        <Button
          onClick={onDelete}
          disabled={isPending}
          variant="outline"
          className={cn("bg-blue-600 border-blue-600 text-white ")}
        >
          {children}
        </Button>
      ) : (
        <Button onClick={onAdd} disabled={isPending}>
          {children}
        </Button>
      )}
    </>
  );
}
