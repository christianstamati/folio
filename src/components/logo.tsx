import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href={"/"} className={cn("text-xl font-bold", className)}>
      chri.dev
    </Link>
  );
}
