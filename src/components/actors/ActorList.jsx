import React from "react";
import ActorCard from "./ActorCard";
import ActorPaginatio from "./ActorPaginatio";

export default function ActorList({ actors }) {
  return (
    <div>
      <div className="grid grid-cols-5 p-5">
        {actors.map((actor) => {
          return <ActorCard actor={actor} key={actor.id} />;
        })}
      </div>
      <ActorPaginatio />
    </div>
  );
}
