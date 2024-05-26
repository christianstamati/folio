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
      className={`flex flex-col-reverse items-center gap-8 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <TitleParagraph title={title} content={content} />
      <div className="h-full w-full">
        <ImageCaption img={img} caption={caption} />
      </div>
    </div>
  );
}

export default ProjectFeature;
