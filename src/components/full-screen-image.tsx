import { ImageSource } from "@/types";
import PlaceholderImage from "@/components/placeholder-image";
import React from "react";

function FullScreenImage({ img }: { img?: ImageSource }) {
  return (
    <div className="flex h-svh items-center justify-center bg-white p-12">
      <PlaceholderImage width={1920} height={1080} alt={""} />
    </div>
  );
}
export default FullScreenImage;
