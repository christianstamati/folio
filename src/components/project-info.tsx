import OverlineText from "@/components/overline-text";
import Image from "next/image";
import React from "react";

type ProjectInfoData = {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  company: string;
  year: string;
  shortDescription: string;
  role: string;
  responsibilities: string[];
  team: string[];
};

function ListItems({ header, items }: { header: string; items: string[] }) {
  return (
    <div className="flex w-full flex-col gap-2">
      <OverlineText>{header}</OverlineText>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export function ProjectInfo({ info }: { info: ProjectInfoData }) {
  return (
    <div className={"w-full"}>
      {/* Project icon */}
      <Image
        className="h-6 w-6 sm:h-8 sm:w-8"
        src={info.icon.src}
        alt={info.icon.alt}
        width={32}
        height={32}
      ></Image>
      {/* Project Title */}
      <h1 className="mb-4 mt-4 text-5xl font-bold">{info.title}</h1>
      {/* Company and year */}
      <div className="flex items-center gap-x-3 text-lg font-medium text-paragraph">
        <span>{info.company}</span>
        <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
        <span>{info.year}</span>
      </div>
      {/* Project METADATA */}
      <div className={"mt-6 flex flex-col gap-12 lg:flex-row"}>
        {/* Project description */}
        <div className="w-full text-base text-primary/70 sm:text-lg lg:w-3/4">
          {info.shortDescription}
        </div>
        {/* List and Team */}
        <div className={"flex w-full flex-col gap-8 xs:flex-row"}>
          <div className="flex w-full flex-col gap-8">
            {/* List */}
            <ListItems header={"ROLE"} items={[info.role]} />

            {/* RESPONSIBILITIES */}
            <ListItems
              header={"RESPONSIBILITIES"}
              items={info.responsibilities}
            />
          </div>
          {/* Team */}
          <ListItems header={"TEAM"} items={info.team} />
        </div>
      </div>
    </div>
  );
}

export function ProjectDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full text-base text-primary/70 sm:text-lg lg:w-3/4">
      {children}
    </div>
  );
}

export function ProjectMetadataHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="mb-4 mt-4 text-5xl font-bold">{children}</h1>;
}

export function ProjectMetadata({ children }: { children: React.ReactNode }) {
  return <div className={"w-full"}>{children}</div>;
}
