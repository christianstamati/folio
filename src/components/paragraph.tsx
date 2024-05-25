import OverlineText from "@/components/overline-text";
import VerticalSpace from "@/components/vertical-space";
import React from "react";

function Paragraph({
  title,
  content,
  indent,
}: {
  title?: string;
  content: string;
  indent?: boolean;
}) {
  return (
    <div className={`p-0 ${indent ? "sm:px-8" : ""}`}>
      {title ? (
        <>
          <OverlineText>{title}</OverlineText>
          <VerticalSpace size={"sm"} />
        </>
      ) : null}
      <p>{content}</p>
    </div>
  );
}

export default Paragraph;
