import { ImageSource } from "@/types";
import Image from "next/image";
import PlaceholderImage from "@/components/placeholder-image";
import React from "react";

export function ImageCaption({
  img,
  caption,
}: {
  img?: ImageSource;
  caption?: string;
}) {
  return (
    <div className="flex w-full flex-col justify-center">
      {img ? (
        <Image
          src={img.src}
          className={"overflow-hidden rounded-2xl"}
          width={img.width}
          height={img.height}
          alt={img.alt}
        ></Image>
      ) : (
        <PlaceholderImage width={300} height={300} className="w-full" />
      )}
      {caption ? (
        <div className="p-4 text-center text-sm text-paragraph">{caption}</div>
      ) : null}
    </div>
  );
}
