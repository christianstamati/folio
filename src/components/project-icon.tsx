import Image from "next/image";
import React from "react";

export function ProjectIcon({ icon }: { icon?: { src: string; alt: string } }) {
  return (
    <Image
      className="h-6 w-6 overflow-hidden rounded-lg shadow-xl sm:h-8 sm:w-8"
      src={icon ? icon.src : "https://placehold.co/32x32"}
      alt={icon ? icon.alt : "project-icon"}
      width={32}
      height={32}
    />
  );
}
