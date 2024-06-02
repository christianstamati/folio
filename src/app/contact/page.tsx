import ContentBlock from "@/components/content-block";
import React from "react";
import { Button } from "@/components/ui/button";
import VerticalSpace from "@/components/vertical-space";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import CopyEmailButton from "@/app/contact/copy-email-button";
import { ContactForm } from "@/app/contact/contact-form";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContentBlock
        variant="2xl"
        className="my-28 flex flex-col items-center justify-center"
      >
        <h1 className="max-w-2xl text-4xl font-bold">
          Let&apos;s get in touch!
        </h1>
        <VerticalSpace />
        <div className="flex flex-row gap-4">
          <CopyEmailButton />
          <Link
            target={"_blank"}
            href={"https://www.linkedin.com/in/christianstamati/"}
          >
            <Button variant="secondary" size={"sm"}>
              <Linkedin size={21} className={"mr-2"} />
              <span>Linkedin</span>
            </Button>
          </Link>
        </div>
        <div className="flex w-full items-center gap-4 py-6">
          <div className="w-full border-t-[0.1rem]"></div>
          <p>or</p>
          <div className="w-full border-t-[0.1rem]"></div>
        </div>
        <ContactForm />
      </ContentBlock>
    </div>
  );
}
