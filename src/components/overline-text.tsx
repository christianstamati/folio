import React, { ReactNode } from "react";

function OverlineText({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-bold tracking-widest text-primary/90">
      {children}
    </h2>
  );
}

export default OverlineText;
