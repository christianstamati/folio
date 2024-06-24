"use client";
import React, { createContext, ReactNode, useContext } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";

type ContextProps = {
  disabled: boolean;
};

const ProjectCardContext = createContext<ContextProps | undefined>(undefined);

const useProjectCardContext = () => {
  const context = useContext(ProjectCardContext);
  if (!context) {
    throw new Error(
      "useProjectCardContext must be used within a ProjectCardContext",
    );
  }
  return context;
};

export function ProjectCardCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex flex-1 items-end justify-end">
      <Image
        className="h-full w-full max-w-2xl object-cover"
        src={src}
        alt={alt}
        width={900}
        height={800}
        priority
        quality={100}
      />
    </div>
  );
}

export function ProjectCardContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-[0.7] flex-col justify-center py-8 pl-8 ml:py-16 ml:pl-16">
      {children}
    </div>
  );
}

export function ProjectCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-1 mt-4 text-2xl font-bold sm:mb-3 sm:mt-6 sm:text-4xl">
      {children}
    </h2>
  );
}

export function ProjectCardMetadata({
  category,
  year,
}: {
  category: string;
  year: number;
}) {
  return (
    <div className="flex items-center gap-x-3 text-sm font-semibold tracking-widest">
      <span>{category}</span>
      <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
      <span>{year}</span>
    </div>
  );
}

export function ProjectCardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="max-w-xs py-4 text-[16px] sm:py-6 sm:text-[18px]">
      {children}
    </p>
  );
}

export function ProjectCardCta({ children }: { children: React.ReactNode }) {
  const ctx = useProjectCardContext();

  if (ctx.disabled) {
    return (
      <div className="flex w-fit gap-x-4 rounded-xl bg-primary/10 p-3 text-[16px] text-primary sm:translate-y-full sm:text-[18px] sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
        <span>This case study isn&apos;t ready yet</span>
      </div>
    );
  }

  return (
    <button className="flex w-fit gap-x-4 rounded-xl bg-background p-4 text-[16px] sm:text-[18px]">
      <span>{children}</span>
      <ArrowRight></ArrowRight>
    </button>
  );
}

export function ProjectCard({
  href,
  children,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <ProjectCardContext.Provider value={{ disabled: disabled ?? false }}>
      {disabled ? (
        <div
          className={clsx(
            `group flex w-full cursor-not-allowed flex-col overflow-hidden rounded-3xl bg-secondary ml:w-[900px] ml:flex-row`,
          )}
        >
          {children}
        </div>
      ) : (
        <Link
          href={href}
          className={clsx(
            `flex w-full flex-col overflow-hidden rounded-3xl bg-secondary transition-all duration-300 hover:scale-100 hover:bg-secondary/70 sm:hover:scale-105 sm:hover:shadow-2xl ml:w-[900px] ml:flex-row`,
          )}
        >
          {children}
        </Link>
      )}
    </ProjectCardContext.Provider>
  );
}
