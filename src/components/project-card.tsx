import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

type ProjectData = {
  icon: string;
  cover: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  link: string;
};

type ProjectCardProps = {
  data: ProjectData;
  disabled?: boolean;
};

function ProjectCard({ data, disabled }: ProjectCardProps) {
  return (
    <Link
      href={"/suit-configurator-3d"}
      className={clsx(
        "flex w-full flex-col overflow-hidden rounded-3xl bg-secondary transition-all duration-300 hover:scale-100 hover:bg-secondary/70 sm:hover:scale-105 sm:hover:shadow-2xl ml:w-[900px] ml:flex-row",
        {
          "pointer-events-none opacity-50 sm:hover:scale-100 sm:hover:shadow-none":
            disabled,
        },
      )}
    >
      <div className="flex flex-[0.7] flex-col justify-center py-8 pl-8 ml:py-16 ml:pl-16">
        <Image
          className="h-6 w-6 sm:h-8 sm:w-8"
          src={data.icon}
          alt={"project-icon"}
          width={32}
          height={32}
        ></Image>
        <h2 className="mb-1 mt-4 text-2xl font-bold sm:mb-3 sm:mt-6 sm:text-4xl">
          {data.title}
        </h2>
        <div className="flex items-center gap-x-3 text-sm font-semibold tracking-widest">
          <span>{data.category}</span>
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
          <span>{data.year}</span>
        </div>
        <p className="max-w-xs py-4 text-[16px] sm:py-6 sm:text-[18px]">
          {data.shortDescription}
        </p>
        <button className="flex w-fit gap-x-4 rounded-xl bg-background p-4 text-[16px] sm:text-[18px]">
          <span>Read the Case Study</span>
          <ArrowRight></ArrowRight>
        </button>
      </div>
      <div className="flex flex-1 items-end justify-end">
        <Image
          className="h-full w-full max-w-2xl object-cover"
          src={data.cover}
          alt={"project-icon"}
          width={200}
          height={100}
        ></Image>
      </div>
    </Link>
  );
}

export default ProjectCard;
