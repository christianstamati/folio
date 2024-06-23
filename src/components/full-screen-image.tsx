import { ImageSource } from "@/types";
import PlaceholderImage from "@/components/placeholder-image";
import React from "react";
import Image from "next/image";

export function FullScreenImage({ img }: { img?: ImageSource }) {
  return (
    <div className="flex w-full items-center justify-center bg-neutral-100 px-4 py-16">
      {img ? (
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
        />
      ) : (
        <PlaceholderImage width={1080} height={1080} />
      )}
    </div>
  );
}
