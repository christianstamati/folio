import { ImageSource } from "@/types";
import PlaceholderImage from "@/components/placeholder-image";
import React from "react";

function FullScreenImage({ img }: { img?: ImageSource }) {
  return (
    <div className="flex items-center justify-center bg-secondary p-4 py-6 sm:p-12">
      <PlaceholderImage width={1080} height={1080} alt={""} />
    </div>
  );
}
export default FullScreenImage;
