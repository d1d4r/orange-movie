import React from "react";
import GenraFilter from "./GenraFilter";
import YearsFilter from "./YearsFilter";
import VoteAverageGTEFilter from "./VoteAverageGTEFilter";
import { Button } from "../ui/button";

export default function Filters() {
  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      <GenraFilter />
      <YearsFilter />
      <VoteAverageGTEFilter />
      <Button variant="destructive">RESET FILTERS</Button>
    </div>
  );
}
