import {
  ProjectCard,
  ProjectMetadata,
  ProjectContent,
  ProjectCover,
  ProjectCta,
  ProjectDescription,
  ProjectIcon,
  ProjectTitle,
} from "@/components/project-card";

export default function ProjectCardDev() {
  return (
    <div>
      <ProjectCard href={""} disabled>
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
    </div>
  );
}
