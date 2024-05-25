import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ImageSource } from "@/types";

function ProjectCover({
  img,
  className,
}: {
  img: ImageSource;
  className?: string;
}) {
  return (
    <div className={cn("mb-16 mt-4 h-[500px] md:m-0 md:h-svh", className)}>
      <Image
        className="h-full w-full object-cover"
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
    </div>
  );
}

export default ProjectCover;
