import React, { ReactNode } from "react";

export function BulletNumber({ children }: { children: ReactNode }) {
  return (
    <div
      className={
        "flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-red-200 text-lg font-semibold text-red-500"
      }
    >
      <span>{children}</span>
    </div>
  );
}

export function BulletItem({ children }: { children: ReactNode }) {
  return <div className="flex gap-x-4">{children}</div>;
}

export function BulletPoints({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-y-8">{children}</div>;
}
