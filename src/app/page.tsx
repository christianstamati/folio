import { Github, Mail } from "lucide-react";
import {
  ProjectCard,
  ProjectContent,
  ProjectCover,
  ProjectCta,
  ProjectDescription,
  ProjectIcon,
  ProjectMetadata,
  ProjectTitle,
} from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocationPin } from "@/components/location-pin";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background">
      <section className="mb-24 mt-32 max-w-xl px-4 text-center sm:my-36">
        <LocationPin>Venice, Italy</LocationPin>
        <h1 className="my-4 text-4xl font-bold leading-snug sm:text-6xl">
          Hi, I’m Christian.
        </h1>
        <p>
          On a mission to build products people love, <br /> I turn ideas into
          digital products.
        </p>
        <div className="mt-6 flex w-full flex-col justify-center gap-2 sm:flex-row">
          <Link href={"/contact"}>
            <Button className="w-full" size={"lg"}>
              <Mail size={21} className={"mr-2"} />
              <span>Contact Me</span>
            </Button>
          </Link>
          <Link target={"_blank"} href="https://github.com/christianstamati">
            <Button className="w-full" size={"lg"} variant="secondary">
              <Github size={21} className={"mr-2"} />
              <span>GitHub</span>
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex w-full items-center justify-center px-4 sm:px-8 md:px-16">
        <div className="mb-28 flex w-full flex-col gap-y-20 ml:w-fit">
          <ProjectCard href={"/suit-configurator-3d"}>
            <ProjectContent>
              <ProjectIcon
                src={"/static/the-card-job/project-icon.png"}
                alt={"project-icon"}
              />
              <ProjectTitle>Configurator 3D</ProjectTitle>
              <ProjectMetadata category={"FULLSTACK"} year={2022} />
              <ProjectDescription>
                A simple tool showcasing key details that elevate a groom&apos;s
                suit from ordinary to exceptional.
              </ProjectDescription>
              <ProjectCta>Read the Case Study</ProjectCta>
            </ProjectContent>
            <ProjectCover
              src={"/static/the-card-job/project-card-cover.png"}
              alt="suggested job project cover"
            />
          </ProjectCard>
          <ProjectCard href={""} disabled>
            <ProjectContent>
              <ProjectIcon
                src={"/static/the-card-job/project-icon.png"}
                alt={"project-icon"}
              />
              <ProjectTitle>My Digital Twin</ProjectTitle>
              <ProjectMetadata category={"UNITY"} year={2022} />
              <ProjectDescription>
                A simple tool showcasing key details that elevate a groom&apos;s
                suit from ordinary to exceptional.
              </ProjectDescription>
              <ProjectCta>Read the Case Study</ProjectCta>
            </ProjectContent>
            <ProjectCover
              src={"/static/the-card-job/project-card-cover.png"}
              alt="suggested job project cover"
            />
          </ProjectCard>
          <ProjectCard href={""} disabled>
            <ProjectContent>
              <ProjectIcon
                src={"/static/the-card-job/project-icon.png"}
                alt={"project-icon"}
              />
              <ProjectTitle>Size Suggestion</ProjectTitle>
              <ProjectMetadata category={"UNITY"} year={2022} />
              <ProjectDescription>
                A simple tool showcasing key details that elevate a groom&apos;s
                suit from ordinary to exceptional.
              </ProjectDescription>
              <ProjectCta>Read the Case Study</ProjectCta>
            </ProjectContent>
            <ProjectCover
              src={"/static/the-card-job/project-card-cover.png"}
              alt="suggested job project cover"
            />
          </ProjectCard>
        </div>
      </section>
    </main>
  );
}
