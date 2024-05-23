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

function ProjectInfo({ info }: { info: ProjectInfoData }) {
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
      <h1 className="mb-4 mt-4 text-4xl font-bold">{info.title}</h1>

      {/* Company and year */}
      <div className="flex items-center gap-x-3 text-lg font-medium text-paragraph">
        <span>{info.company}</span>
        <div className="h-1.5 w-1.5 rounded-full bg-neutral-400"></div>
        <span>{info.year}</span>
      </div>

      {/* Project INFO */}
      <div className={"mt-6 flex flex-col gap-12 lg:flex-row"}>
        {/* Project description */}
        <div className="text-paragraph-dark w-full text-base sm:text-lg lg:w-3/4">
          {info.shortDescription}
        </div>

        {/* Role and Team */}
        <div className={"xs:flex-row flex w-full flex-col gap-8"}>
          <div className="flex w-full flex-col gap-8">
            {/* Role */}
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

export default ProjectInfo;
