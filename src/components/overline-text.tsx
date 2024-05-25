import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

function OverlineText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-sm font-semibold tracking-widest text-primary/90",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default OverlineText;
