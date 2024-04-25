"use client";
import { shimmer, toBase64 } from "@/lib/shimmer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({ src, alt, ...rest }) {

  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      alt={alt}
      {...rest}
      src={imgSrc ? imgSrc : "/broken-image.webp"}
      onError={() => {
        setImgSrc("/broken-image.webp");
      }}
      onLoadingComplete={(image)=> image.classList.remove('opacity-0')}
    />
  );
}
