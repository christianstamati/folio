import React from "react";
type Size = "sm" | "md" | "lg" | "xl";

function VerticalSpace({
  size = "md",
  debug,
}: {
  size?: Size;
  debug?: boolean;
}) {
  function s() {
    switch (size) {
      case "sm":
        return "h-[1rem]";
      case "md":
        return "h-[2rem]";
      case "lg":
        return "h-[4rem]";
      case "xl":
        return "h-[8rem]";
    }
  }
  return (
    <div
      className={`w-full ${s()} ${debug ? "flex items-center justify-center rounded-xl border-2 border-dotted border-primary text-3xl" : ""}`}
    >
      {debug ? size : null}
    </div>
  );
}
export default VerticalSpace;
