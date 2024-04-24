"use client";
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
    />
  );
}
