import OverlineText from "@/components/overline-text";
import React from "react";

export function Callout({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl bg-secondary px-8 py-6">{children}</div>;
}

export function CalloutTitle({ children }: { children: React.ReactNode }) {
  return <OverlineText className="mb-3">{children}</OverlineText>;
}

export function CalloutDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p>{children}</p>;
}
