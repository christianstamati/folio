import { Github, Mail, MapPin } from "lucide-react";
import ProjectCard from "@/app/project-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function LocationPin() {
  return (
    <div className="flex w-full justify-center gap-4">
      <MapPin />
      <span className="text-[18px] font-medium">Venice, Italy</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="my-36 max-w-xl px-6 text-center">
        <LocationPin></LocationPin>
        <h1 className="my-8 text-6xl font-bold">Hi, I’m Christian.</h1>
        <p>
          On a mission to build products people love, I turn ideas into digital
          products & websites. Here&apos;s a summary of my work so far.
        </p>
        <div className="mt-6 flex justify-center gap-x-4">
          <Link href={"/contact"}>
            <Button size={"lg"}>
              <Mail size={21} className={"mr-2"} />
              <span>Contact Me</span>
            </Button>
          </Link>
          <Link target={"_blank"} href="https://github.com/christianstamati">
            <Button size={"lg"} variant="secondary">
              <Github size={21} className={"mr-2"} />
              <span>GitHub</span>
            </Button>
          </Link>
        </div>
      </section>
      <section className="flex w-full items-center justify-center px-4 sm:px-8 md:px-16">
        <div className="ml:w-fit mb-36 flex w-full flex-col gap-y-20">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  );
}
