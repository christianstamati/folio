import { ImageSource } from "@/types";
import TitleParagraph from "@/components/title-paragraph";
import ImageCaption from "@/components/image-caption";
import React from "react";

function ProjectFeature({
  title,
  content,
  caption,
  img,
  reverse,
}: {
  title: string;
  content: string;
  img?: ImageSource;
  caption?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-x-8 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <TitleParagraph title={title} content={content} />
      <div className="h-full w-full">
        <ImageCaption img={img} caption={caption} />
      </div>
    </div>
  );
}

export default ProjectFeature;
