import React from "react";
import GradientBackground from "@/components/gradient-background";
import { Logo } from "@/components/logo";
import VerticalSpace from "@/components/vertical-space";
import Link from "next/link";

export function Maintenance() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <GradientBackground />
      <Logo className="pt-8 text-2xl"></Logo>
      <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
        <h1 className="max-w-sm text-3xl font-semibold sm:max-w-lg sm:text-4xl">
          The site is under maintenance!
        </h1>
        <VerticalSpace />
        <p className="max-w-md text-black/70">
          The website is currently undergoing scheduled maintenance, it will be
          back soon! Thank you for being so patient. Contact me for more
          information!
        </p>
        <VerticalSpace />
        <Link href="mailto:hello@chri.dev" className="font-bold underline">
          hello@chri.dev
        </Link>
        <VerticalSpace size="xl" />
      </div>
    </div>
  );
}
