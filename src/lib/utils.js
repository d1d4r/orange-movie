import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function wait(time) {
  return new Promise((resolve) => setTimeout((resolve) => resolve(), time));
}
