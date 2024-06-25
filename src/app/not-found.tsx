import Link from "next/link";
import { Video } from "@/components/video";
import React from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 p-4">
      <Video
        className="max-w-xs rounded-sm"
        src="https://s3.eu-central-1.amazonaws.com/chri.dev/not-found.mp4"
        height={1080}
        width={1080}
        playsInline
        autoPlay
        muted
        loop
      />

      <div className="text-center">
        <p className="mb-4">Could not find requested resource</p>
        <Link href="/">
          <Button variant="secondary" size={"lg"}>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
