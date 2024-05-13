import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

function ProjectCard() {
  return (
    <Card className="rounded-xl bg-accent p-6 py-8">
      <span>May 25, 2023</span>
      <h3 className="mt-6 text-2xl font-bold">Slant it</h3>
      <p className="mt-3 leading-relaxed text-primary/70">
        This card highlights the details of a project – logo, name, description,
        technologies used to build the project and the live URL to view it. The
        card also has a subtle mouse following hover effect.
      </p>
      <div className="mt-6 flex gap-4">
        <Badge>Next.js</Badge>
        <Badge>TypeScript</Badge>
        <Badge>React</Badge>
        <Badge>Express</Badge>
      </div>
      <div className="mt-6">
        <Button>
          <span>Live</span>
          <ArrowUpRight />
        </Button>
      </div>
    </Card>
  );
}

export default ProjectCard;
