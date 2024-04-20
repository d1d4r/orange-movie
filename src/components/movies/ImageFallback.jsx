"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ImageFallback({
  path_image,
  fallback,
  src,
}) {
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      width={300}
      height={300}
      onError={setError}
      src={
        error
          ? fallback
          : `https://image.tmdb.org/t/p/original/${path_image}`
      }
   
      className="object-cover  select-none h-[18rem] animate-shade"
      //   src={`https://image.tmdb.org/t/p/original/${path_image}`}
      alt="Image Description"
    />
  );
}
