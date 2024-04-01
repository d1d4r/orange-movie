import ActorList from "@/components/actors/ActorList";
import { getAllActors } from "@/data/api/actors";
import React from "react";

export default async function ActorPage() {
  const data = await getAllActors();
  console.log("🚀 ~ ActorPage ~ data:", data)
  return <ActorList actors={data} />;
}
