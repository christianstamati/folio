import ContentBlock from "@/components/content-block";
import React from "react";
import OverlineText from "@/components/overline-text";
import Experience from "@/components/experience";
import { ExperienceData } from "@/types";
import VerticalSpace from "@/components/vertical-space";

const aboutPage = {
  experiences: [
    {
      from: {
        year: 2020,
        month: 11,
      },
      to: "present",
      at: "WeWear",
      header: "Software Developer",
      description:
        "Managed diverse projects in Unity, Unreal, and React. Developed numerous prototypes in Figma and translated UI designs into functional apps. Mainly maintained the We Wear app in Unity and built 3D configurators in Unreal.",
    },
    {
      from: {
        year: 2021,
        month: 2,
      },
      to: {
        year: 2021,
        month: 5,
      },
      at: "NABA",
      header: "Technical Artist",
      description:
        "Oversaw the technical aspects of Unreal in the execution of a virtual production experiment. Managed the setup of the Unreal project for VP and crafted tools to enhance navigation within the virtual set, ensuring a seamless and efficient production process.",
    },
    {
      from: {
        year: 2018,
        month: 9,
      },
      to: {
        year: 2020,
        month: 11,
      },
      at: "Self-employed worker",
      header: "Videographer",
      description:
        "Wrote screenplays at university. Worked with Adobe Premiere and Resolve to edit and grade the videos for social media. Had experience with professional cameras and lights in studio and shoot numerous videos on gimbal.",
    },
  ] as ExperienceData[],
  education: [
    {
      from: {
        year: 2017,
        month: 1,
      },
      to: {
        year: 2020,
        month: 10,
      },
      header: "NABA",
      at: "Bachelor in New Technologies",
      description:
        "Resided in Milan for three years, where I pursued a degree in Creative Technologies at NABA, engaging in a new program comprising three key modules: Motion Graphics and VFX, Game Development, and 3D Modeling.",
    },
    {
      from: {
        year: 2014,
        month: 9,
      },
      to: {
        year: 2017,
        month: 6,
      },
      header: "ISSM - ITT",
      at: "Graphic Design & Communication",
      description:
        "Extended my educational journey at ISSM, focusing on advanced studies. Explored predominantly theoretical modules, delving into significant communication case studies and acquiring expertise in crafting brand identities",
    },
    {
      from: {
        year: 2011,
        month: 9,
      },
      to: {
        year: 2014,
        month: 6,
      },
      header: "ISSM - CFP",
      at: "Graphic and printing equipment operator",
      description:
        "Successfully completed a comprehensive three-year diploma program, graduating as a Graphic Operator. Engaged in predominantly practical lectures with a strong emphasis on mastering graphic design software.",
    },
  ] as ExperienceData[],
  skills: [
    {
      header: "UI/UX design",
      description:
        "Adept at crafting seamless UI flows using Figma, coupled with prior experience utilizing Adobe XD.",
    },
    {
      header: "Programming",
      description:
        "Demonstrates proficiency in C# with additional expertise in JavaScript, Python, C++, and Blueprints. Possesses adaptability to quickly learn and work with new programming languages as required.",
    },
    {
      header: "3D",
      description:
        "Possesses a foundational understanding and practical knowledge of 3D modeling software, specifically demonstrating proficiency in both Blender and Maya. ",
    },
  ],
};

function ExperienceSet({
  items,
  header,
}: {
  items: ExperienceData[];
  header: string;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
      <OverlineText className="w-[30%]">{header}</OverlineText>
      <div className="flex w-full flex-col gap-16">
        {items.map((x, index) => (
          <Experience key={index} experience={x} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContentBlock className="my-36 sm:m-0 sm:mt-36">
        <ExperienceSet items={aboutPage.experiences} header={"EXPERIENCE"} />
        <VerticalSpace size={"xl"}></VerticalSpace>
        <ExperienceSet items={aboutPage.education} header={"EDUCATION"} />
        <VerticalSpace size={"xl"}></VerticalSpace>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <OverlineText className="w-[30%]">SKILLS</OverlineText>
          <div className="flex w-full flex-col gap-16">
            {aboutPage.skills.map((x, index) => (
              <div key={index} className="text-base sm:text-lg ">
                <h2 className="text-lg font-bold sm:text-xl">{x.header}</h2>
                <p className="mt-3">{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentBlock>
    </div>
  );
}
