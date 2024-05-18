import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// min-w-[900px]

function ProjectCard() {
  return (
    <Link
      href={"/"}
      className="ml:w-[900px] ml:flex-row flex w-full flex-col overflow-hidden rounded-3xl bg-secondary transition-all duration-300 hover:scale-105 hover:bg-secondary/70 hover:shadow-2xl"
    >
      <div className="ml:py-16 ml:pl-16 flex flex-[0.7] flex-col justify-center py-8 pl-8">
        <Image
          className="h-6 w-6 sm:h-8 sm:w-8"
          src={"/static/images/suggested-jobs/logo.png"}
          alt={"project-icon"}
          width={32}
          height={32}
        ></Image>
        <h2 className="mb-1 mt-4 text-2xl font-bold sm:mb-3 sm:mt-6 sm:text-4xl">
          Suggested Jobs
        </h2>
        <div className="flex items-center gap-x-3 text-sm font-semibold tracking-widest">
          <span>UX/UI DESIGN</span>
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
          <span>2020</span>
        </div>
        <p className="max-w-xs py-4 text-[16px] sm:py-6 sm:text-[18px]">
          Redesigning job recommendations based on job seeker activity.
        </p>
        <button className="flex w-fit gap-x-4 rounded-xl bg-background p-4 text-[16px] sm:text-[18px]">
          <span>Read the Case Study</span>
          <ArrowRight></ArrowRight>
        </button>
      </div>
      <div className="flex flex-1 items-end justify-end">
        <Image
          className="h-full w-full max-w-2xl object-cover"
          src={"/static/images/suggested-jobs/card-cover.png"}
          alt={"project-icon"}
          width={200}
          height={100}
        ></Image>
      </div>
    </Link>
  );
}

export default ProjectCard;

/*
function ProjectCard() {
  return (
    <Link
      href={"/"}
      className="flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-secondary transition-all duration-300 hover:scale-105 hover:bg-secondary/70 hover:shadow-2xl"
    >
      <div className="flex w-full flex-col justify-center pl-16 pt-16">
        <Image
          src={"/static/images/suggested-jobs/logo.png"}
          alt={"project-icon"}
          width={32}
          height={32}
        ></Image>
        <h2 className="mb-3 mt-6 text-4xl font-bold">Suggested Jobs</h2>
        <div className="flex items-center gap-x-3 text-sm font-semibold tracking-widest">
          <span>UX/UI DESIGN</span>
          <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
          <span>2020</span>
        </div>
        <p className="max-w-xs py-6 text-[18px]">
          Redesigning job recommendations based on job seeker activity.
        </p>
        <button className="flex w-fit gap-x-4 rounded-xl bg-background p-4 text-[18px]">
          <span>Read the Case Study</span>
          <ArrowRight></ArrowRight>
        </button>
      </div>
      <Image
        className=""
        src={"/static/images/suggested-jobs/card-cover.png"}
        alt={"project-icon"}
        width={960}
        height={800}
      ></Image>
    </Link>
  );
}*/
