import React from "react";
import ActorCard from "./ActorCard";
import ActorPaginatio from "./ActorPaginatio";
import { getAllActors } from "@/data/api/actors";

export default async function ActorList({ searchParams }) {
  const { page } = searchParams;
  const actors = await getAllActors(page);
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5 justify-items-center p-5">
        {actors.map((actor) => {
          return <ActorCard actor={actor} key={actor.id} />;
        })}
      </div>
      <ActorPaginatio />
    </div>
  );
}
