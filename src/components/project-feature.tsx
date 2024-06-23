import React from "react";

export function ProjectFeature({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col-reverse items-center gap-8 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {children}
    </div>
  );
}
