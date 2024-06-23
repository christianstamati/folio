import React from "react";
import OverlineText from "@/components/overline-text";
export function List({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function ListHeader({ children }: { children: React.ReactNode }) {
  return <OverlineText>{children}</OverlineText>;
}
