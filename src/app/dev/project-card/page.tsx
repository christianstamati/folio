import {
  ProjectCard,
  ProjectCardMetadata,
  ProjectCardContent,
  ProjectCardCover,
  ProjectCardCta,
  ProjectCardDescription,
  ProjectCardTitle,
} from "@/components/project-card";
import { ProjectIcon } from "@/components/project-icon";

export default function ProjectCardDev() {
  return (
    <div>
      <ProjectCard href={""} disabled>
        <ProjectCardContent>
          <ProjectIcon
            icon={{
              src: "/static/the-card-job/project-icon.png",
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
          src={"/static/the-card-job/project-card-cover.png"}
          alt="suggested job project cover"
        />
      </ProjectCard>
    </div>
  );
}
