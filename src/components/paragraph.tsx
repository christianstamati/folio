import OverlineText from "@/components/overline-text";
import VerticalSpace from "@/components/vertical-space";
import React, { ReactNode } from "react";

export function ParagraphOverlineHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <OverlineText>{children}</OverlineText>
      <VerticalSpace size={"sm"} />
    </>
  );
}

export function ParagraphHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <h3 className="text-2xl font-bold">{children}</h3>
      <VerticalSpace size={"sm"} />
    </>
  );
}

export function ParagraphContent({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function Paragraph({
  children,
  indent,
}: {
  children: React.ReactNode;
  indent?: boolean;
}) {
  return (
    <div className={`w-full p-0 ${indent ? "sm:px-8" : ""}`}>{children}</div>
  );
}
