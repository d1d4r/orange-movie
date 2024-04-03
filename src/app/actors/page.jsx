import ActorList from "@/components/actors/ActorList";
import { getAllActors } from "@/data/api/actors";
import React from "react";

export default async function ActorPage({ searchParams }) {
  const { page } = searchParams;
  const data = await getAllActors(page);

  return <ActorList actors={data} />;
}
