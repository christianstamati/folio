import { Github, Mail, MapPin } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function LocationPin() {
  return (
    <div className="flex w-full justify-center">
      <MapPin className="mr-2" />
      <span className="text-[18px] font-medium">Venice, Italy</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-background">
      <section className="mb-24 mt-32 max-w-xl px-4 text-center sm:my-36">
        <LocationPin></LocationPin>
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
          <ProjectCard
            data={{
              icon: "/static/the-card-job/project-icon.png",
              cover: "/static/the-card-job/project-card-cover.png",
              title: "Configurator 3D",
              category: "FULLSTACK",
              year: "2022",
              shortDescription:
                "A simple tool showcasing key details that elevate a groom's suit from ordinary to exceptional.",
              link: "/suit-configurator-3d",
            }}
          />
          <ProjectCard
            data={{
              icon: "/static/the-card-job/project-icon.png",
              cover: "/static/the-card-job/project-card-cover.png",
              title: "Avatar Manager",
              category: "UNITY",
              year: "2020",
              shortDescription:
                "A digital experience to guide the groom to build an impeccable wedding suit",
              link: "/suit-configurator-3d",
            }}
            disabled
          />
          <ProjectCard
            data={{
              icon: "/static/the-card-job/project-icon.png",
              cover: "/static/the-card-job/project-card-cover.png",
              title: "Size Suggestion",
              category: "FULLSTACK",
              year: "2020",
              shortDescription:
                "Redesigning job recommendations based on job seeker activity.",
              link: "/suit-configurator-3d",
            }}
            disabled
          />
        </div>
      </section>
    </main>
  );
}
