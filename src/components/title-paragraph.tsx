import VerticalSpace from "@/components/vertical-space";
import React from "react";

function TitleParagraph({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold">{title}</h3>
      <VerticalSpace size={"sm"} />
      <p>{content}</p>
    </div>
  );
}
export default TitleParagraph;
