import React from "react";
import { ExperienceData } from "@/types";

type ExperienceProps = {
  experience: ExperienceData;
};

function Experience({ experience }: ExperienceProps) {
  function formatDate(year: number, month: number) {
    const date = new Date(year, month - 1);
    const m = date.toLocaleString("default", { month: "short" });
    return `${m} ${date.getFullYear()}`;
  }

  const toDate =
    experience.to === "present"
      ? "Present"
      : formatDate(experience.to.year, experience.to.month);

  const date = `${formatDate(experience.from.year, experience.from.month)} — ${toDate}`;

  return (
    <div className="text-base sm:text-lg">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-lg font-bold sm:text-xl">{experience.header}</h2>
        <div className="text-sm sm:text-base">{date}</div>
      </div>
      <div>{experience.at}</div>
      {experience.description ? (
        <p className="mt-3">{experience.description}</p>
      ) : null}
    </div>
  );
}

export default Experience;
