"use client";
import { rgbDataURL, shimmer, toBase64 } from "@/lib/shimmer";
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
      src={imgSrc ? imgSrc : "/fail-load.jpg"}
      onError={() => {
        setImgSrc("/fail-load.jpg");
      }}
      //placeholder="blur"
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(300, 300))}`}
      blurDataURL={rgbDataURL(237, 181, 6)}
      onLoad={(e) =>{ e.target.classList.remove("opacity-0")}}
    />
  );
}
