import React from "react";
import YearsFilter from "./YearsFilter";
import VoteAverageGTEFilter from "./VoteAverageGTEFilter";
import { Button } from "../ui/button";
import { genresList, GetVotes, GetYears } from "@/data/api/movies";
import { FancyMultiSelect } from "../FancyMultiSelect.1";
import GenraFilter from "./GenraFilter";
import Link from "next/link";

export default async function Filters({ href = "/movies" }) {
  const genres = await genresList();
  const years = GetYears();
  const votes = GetVotes();

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-10 md:flex-row">
      <GenraFilter data={genres} name="genres" />
      <YearsFilter data={years} name="years" />
      <VoteAverageGTEFilter data={votes} name="vote" />
      <Button asChild>
        <Link href={href}>RESET FILTERS</Link>
      </Button>
    </div>
  );
}
