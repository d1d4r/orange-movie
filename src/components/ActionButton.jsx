"use client";
import React from "react";
import { Button } from "./ui/button";
import { addFav } from "@/actions/addFav";
import { cn } from "@/lib/utils";
import { deleteFav } from "@/actions/deleteFav";

export default function ActionButton({ children, movieId, checked }) {
  return (
    <>
      {checked ? (
        <Button
          onClick={() => deleteFav(movieId)}
          variant="outline"
          className={cn("bg-blue-600 border-blue-600 text-white ")}
        >
          {children}
        </Button>
      ) : (
        <Button onClick={() => addFav(movieId)}>{children}</Button>
      )}
    </>
  );
}
