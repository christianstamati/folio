import Image from "next/image";
import { cn } from "@/lib/utils";
import ProjectCard from "@/app/project-card";

function GridImage({
  className,
  src,
  alt,
}: {
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-40 w-full overflow-hidden rounded-md",
        className,
      )}
    >
      <Image className="h-full w-full object-cover" src={src} alt={alt} fill />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className={"mt-36 w-full max-w-[520px] px-6 md:max-w-[620px]"}>
        <h1 className="text-2xl font-medium">
          hey, I&apos;m christian stamati 👋
        </h1>
        <p className={`py-8 leading-relaxed`}>
          I&apos;m a developer from Italy, deeply passionate about crafting
          digital products. I currently work as a unity / unreal / front-end
          developer at WeWear, where I help build services to manage digital
          twins and improve online shopping experience.
        </p>
        <div className="mt-8 grid grid-cols-4 gap-2">
          <GridImage
            className={"col-span-2"}
            src={"/static/images/beer.jpg"}
            alt={"beer"}
          />
          <GridImage src={"/static/images/boy.jpg"} alt={"drone"} />
          <GridImage
            className="row-span-2"
            src={"/static/images/vp.jpg"}
            alt={"drone"}
          />
          <GridImage
            className={"row-span-2 "}
            src={"/static/images/ftracking.png"}
            alt={"beer"}
          />
          <GridImage
            className={"row-span-2 "}
            src={"/static/images/jonny.png"}
            alt={"beer"}
          />
          <GridImage
            className={"row-span-2 "}
            src={"/static/images/gym.png"}
            alt={"beer"}
          />
          <GridImage
            className={"row-span-2 "}
            src={"/static/images/tracking.png?v=1"}
            alt={"beer"}
          />
          <GridImage
            className={"row-span-2 "}
            src={"/static/images/venice.jpg"}
            alt={"beer"}
          />
          <GridImage
            className={"col-span-2 "}
            src={"/static/images/cinema.jpg"}
            alt={"beer"}
          />
          <GridImage
            className={"col-span-2"}
            src={"/static/images/fioi.jpg"}
            alt={"beer"}
          />
          <GridImage src={"/static/images/me.jpg?v=1"} alt={"beer"} />{" "}
        </div>
        <p className="py-16 leading-relaxed">
          On a mission to build digital products users love, and along the way,
          learning and growing as a developer. Here&apos;s a summary of my work
          so far.
        </p>

        <div className="flex flex-col gap-y-4 py-16">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
