import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImageFallback from "../movies/ImageFallback";

export default function ActorCard({ actor }) {
  return (
    <div className="cursor-pointer group transition-all h-96 hover:scale-90 grid grid-cols-1 grid-rows-1">
      {/* <div className="h-80 col-start-1 row-start-1 z-10  group-hover:opacity-25 transition-all ">
        <p className="text-white ">{actor.id}</p>
        <p className="text-white ">{actor.known_for_department}</p>
        <p className="text-white ">{actor.birthday}</p>
        <p className="text-white ">{actor.place_of_birth}</p>
        <p className="text-white ">
          {actor.deathday === null ? "not" : actor.deathday}
        </p>
      </div> */}
      <div className="col-start-1 row-start-1">
        <div className="flex-grow ">
          {/* <Image
            height={300}
            width={300}
            className="object-cover select-none h-80"
            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
            alt="Image Description"
          /> */}
          <ImageFallback
            className="object-cover  select-none h-[18rem] animate-shade"
            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
            width={300}
            height={300}
            alt="alt"
          />
        </div>
        <div className="z-10">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {actor.name}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {actor.gender === 1 ? "female" : "male"}|
            {actor.known_for_department}
          </p>
        </div>
      </div>
    </div>
  );
}

//guesttester
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJ0b2tlblR5cGUiOiJ1c2VyIiwidXNlcklkIjoiNjYxZTg1MzhmMDBkNDI1Mzc5OWQyZTJkIiwiaWF0IjoxNzEzMjgwMjE5LCJleHAiOjE3NDQ4MTYyMTl9
//   .ir8SdeNPiKhAG6HljEws0ik5YYWh7ac2D4x2M8Ycra8;

//GUESTTESTER123456
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJ1c2VySWQiOiI2NjIzYmY1YmYwMGQ0MjUzNzlkY2ExMTAiLCJpYXQiOjE3MTM2MTg3NzksImV4cCI6MTc0NTE1NDc3OX0
//   .wcRBAIL8YRHiqNMRxErYyXE00S9mMUTH792VXqDJGqk;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
//   .eyJ0b2tlblR5cGUiOiJ1c2VyIiwidXNlcklkIjoiNjYyM2JmNWJmMDBkNDI1Mzc5ZGNhMTEwIiwiaWF0IjoxNzEzNjE4OTcxLCJleHAiOjE3NDUxNTQ5NzF9
//   .HaBp5sOelF3_ayPq9ssPbPmaju3AImGbnX8aDAH9aTI;
