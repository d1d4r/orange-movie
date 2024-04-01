import React from "react";

export default function MoviePoster({
  original_title,
  backdrop_path,

}) {
  return (
    <div className="h-[60vh] md:h-[80vh] grid grid-rows-1 grid-cols-1 ">
      <div className="z-10 col-start-1 row-start-1 backdrop-grayscale hover:backdrop-grayscale-0"></div>
      <img
        className="object-cover col-start-1 row-start-1 select-none size-full"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt="poster"
      />
      <div className="z-20 col-start-1 row-start-1 m-5">
        <p className="text-4xl text-center text-white">{original_title}</p>
        
      </div>
    </div>
  );
}
