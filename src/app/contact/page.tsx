import ContentBlock from "@/components/content-block";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import VerticalSpace from "@/components/vertical-space";
import { Calendar, Copy, Download, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContentBlock
        variant="2xl"
        className="flex h-svh flex-col items-center justify-center"
      >
        <h1 className="max-w-2xl text-4xl font-bold">
          Let&apos;s get in touch!
        </h1>
        <VerticalSpace />
        <div className="flex flex-row gap-4">
          <Button variant="secondary" size={"sm"}>
            <Calendar size={21} className={"mr-2"} />
            <span>Book a call</span>
          </Button>
          <Button variant="secondary" size={"sm"}>
            <Copy size={21} className={"mr-2"} />
            <span>Copy email</span>
          </Button>
          <Button variant="secondary" size={"sm"}>
            <Linkedin size={21} className={"mr-2"} />
            <span>DM me</span>
          </Button>
        </div>
        <div className="flex w-full items-center gap-4 py-6">
          <div className="w-full border-t-[0.1rem]"></div>
          <p>or</p>
          <div className="w-full border-t-[0.1rem]"></div>
        </div>
        <form className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              className="h-12 rounded-xl"
              name={"name"}
              placeholder="Your name"
            />
            <Input
              className="h-12 rounded-xl"
              name={"email"}
              placeholder="Your email"
            />
          </div>
          <Textarea
            className="h-[250px] rounded-xl py-3"
            name={"message"}
            placeholder="Your message"
          />
          <Button className={"rounded-xl p-7"} type={"submit"}>
            Send
          </Button>
        </form>
      </ContentBlock>
    </div>
  );
}
