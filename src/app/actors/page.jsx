import ActorList from "@/components/actors/ActorList";
import Skeleton from "@/components/movies/Skeleton";
import { Suspense } from "react";
import { v4 as uuid } from "uuid";

export default async function ActorPage({ searchParams }) {
  return (
    <div key={uuid()}>
      <Suspense fallback={<Skeleton />}>
        <ActorList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
