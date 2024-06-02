import OverlineText from "@/components/overline-text";
import React from "react";

function Callout({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl bg-secondary px-8 py-6">
      <OverlineText className="mb-3">{title}</OverlineText>
      <p>{description}</p>
    </div>
  );
}
export default Callout;
