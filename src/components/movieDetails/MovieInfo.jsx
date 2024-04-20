import { formatMoney, roundToOneDecimalPlace } from "@/lib/formater";
import React from "react";
import { CircleDollarSign, Vote, Languages, CalendarCheck } from "lucide-react";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
export default function MovieInfo({
  overview,
  budget,
  release_date,
  vote_average,
  language,
  genres,
}) {
  return (
    <div className="w-full  m-auto space-y-2 md:w-1/2 ">
      <Info icone="" name="Over view" info={overview} />
      <Info
        icone={<CircleDollarSign />}
        name="Budget"
        info={formatMoney(budget)}
      />
      <Info icone={<CalendarCheck />} name="Release date" info={release_date} />
      <Info
        icone={<Vote />}
        name="Vote average"
        info={roundToOneDecimalPlace(vote_average)}
      />
      <Info icone={<Languages />} name="Language" info={language} />
      <div className="p-2 ">
        <h2 className="flex items-center text-2xl ">Genres</h2>
        {genres.map((genre) => {
          return (
            <Link
              href={{
                pathname: "/movies",
                query: {
                  with_genres: genre.id,
                },
              }}
              key={genre.id}
              className={badgeVariants({ variant: "outline" })}
            >
              #{genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export const Info = ({ name, info, icone }) => {
  return (
    <div className="p-2 space-y-2">
      <h2 className="flex items-center text-2xl ">
        {icone} {name}
      </h2>
      <p>{info}</p>
    </div>
  );
};
