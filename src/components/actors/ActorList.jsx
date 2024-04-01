import React from "react";
import ActorCard from "./ActorCard";

export default function ActorList({actors}) {
  
  return (
    <div className="grid grid-cols-5 p-5">
      {actors.map((actor) => {
        return <ActorCard actor={actor} key={actor.id} />;
      })}
    </div>
  );
}
