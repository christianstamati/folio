import { Github, Mail } from "lucide-react";
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardCover,
  ProjectCardCta,
  ProjectCardDescription,
  ProjectCardMetadata,
  ProjectCardTitle,
} from "@/components/project-card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocationPin } from "@/components/location-pin";
import { ProjectIcon } from "@/components/project-icon";

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
            <ProjectCardContent>
              <ProjectIcon
                icon={{
                  src: "/static/configurator-3d/project-icon.png",
                  alt: "project-icon",
                }}
              />
              <ProjectCardTitle>Configurator 3D</ProjectCardTitle>
              <ProjectCardMetadata category={"FULLSTACK"} year={2022} />
              <ProjectCardDescription>
                A simple tool showcasing key details that elevate a groom&apos;s
                suit from ordinary to exceptional.
              </ProjectCardDescription>
              <ProjectCardCta>Read the Case Study</ProjectCardCta>
            </ProjectCardContent>
            <ProjectCardCover
              src={"/static/configurator-3d/card-cover.png"}
              alt="suggested job project cover"
            />
          </ProjectCard>
          <ProjectCard href={""} disabled>
            <ProjectCardContent>
              <ProjectIcon
                icon={{
                  src: "/static/size-suggestion/project-icon.png",
                  alt: "project-icon",
                }}
              />
              <ProjectCardTitle>Size Suggestion</ProjectCardTitle>
              <ProjectCardMetadata category={"FULLSTACK"} year={2023} />
              <ProjectCardDescription>
                Showcase interactive 3D models and size fitting on any device
                with We Wear&apos;s embeddable widget.
              </ProjectCardDescription>
              <ProjectCardCta>Read the Case Study</ProjectCardCta>
            </ProjectCardContent>
            <ProjectCardCover
              src={"/static/the-card-job/project-card-cover.png"}
              alt="suggested job project cover"
            />
          </ProjectCard>
          <ProjectCard href={""} disabled>
            <ProjectCardContent>
              <ProjectIcon
                icon={{
                  src: "/static/my-digital-twin/project-icon.png",
                  alt: "project-icon",
                }}
              />
              <ProjectCardTitle>My Digital Twin</ProjectCardTitle>
              <ProjectCardMetadata category={"UNITY"} year={2021} />
              <ProjectCardDescription>
                Manage authenticity, ownership, and data permissions of digital
                twins with blockchain technology.
              </ProjectCardDescription>
              <ProjectCardCta>Read the Case Study</ProjectCardCta>
            </ProjectCardContent>
            <ProjectCardCover
              src={"/static/my-digital-twin/project-cover.png"}
              alt="suggested job project cover"
            />
          </ProjectCard>
        </div>
      </section>
    </main>
  );
}
