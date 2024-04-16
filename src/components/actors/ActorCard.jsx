import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ActorCard({ actor }) {
  return (
    <Link
      className="flex flex-col transition-all h-96 hover:scale-90"
      href={`/actors/${actor.id}`}
    >
      <div className="flex-grow ">
        <Image
          width={320}
          height={320}
          className="object-cover select-none h-80"
          src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
          alt="Image Description"
        />
      </div>
      <div className="z-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {actor.name}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {actor.gender === 1 ? "female" : "male"}
        </p>
      </div>
    </Link>
  );
}


