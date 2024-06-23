import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  width: number;
  height: number;
  className?: string;
};

function PlaceholderImage({ className, ...rest }: PlaceholderImageProps) {
  return (
    <Image
      src={`https://placehold.co/${rest.width}x${rest.height}.png`}
      className={cn("overflow-hidden rounded-2xl", className)}
      alt={"placeholder-image"}
      {...rest}
    ></Image>
  );
}

export default PlaceholderImage;
