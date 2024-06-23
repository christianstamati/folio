import React from "react";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-x-3 text-lg font-medium text-paragraph">
      {children}
    </div>
  );
}
