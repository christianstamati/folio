import React from "react";
import Experience from "@/components/experience";
import { ExperienceData } from "@/types";

const exp = {
  from: {
    year: 2020,
    month: 1,
  },
  to: "present",
  at: "WeWear",
  header: "Software Developer",
  description:
    "Managed diverse projects in Unity, Unreal, and React. Developed\n" +
    "          numerous prototypes in Figma and translated UI designs into functional\n" +
    "          apps. Mainly maintained the We Wear app in Unity and built 3D\n" +
    "          configurators in Unreal.",
} as ExperienceData;

export default function ExperienceCardPage() {
  return (
    <div className="flex h-svh items-center justify-center">
      <Experience experience={exp} />
    </div>
  );
}
