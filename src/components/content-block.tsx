import React from "react";
import { cn } from "@/lib/utils";

function ContentBlock({
  children,
  className,
  variant = "5xl",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "5xl" | "2xl" | "3xl";
}) {
  function v() {
    switch (variant) {
      case "5xl":
        return "sm:max-w-xl md:max-w-3xl lg:max-w-5xl";
      case "2xl":
        return "md:max-w-2xl";
      case "3xl":
        return "md:max-w-3xl";
    }
  }

  return <div className={cn(`w-full px-6 ${v()}`, className)}>{children}</div>;
}

export default ContentBlock;
