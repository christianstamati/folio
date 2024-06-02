import ContentBlock from "@/components/content-block";
import React from "react";
import { ContactForm } from "@/app/contact/contact-form";
import ContactOptions from "@/app/contact/contact-options";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ContentBlock
        variant="2xl"
        className="flex h-svh flex-col justify-center"
      >
        <div className="flex items-center justify-between pb-6">
          <h1 className="max-w-2xl text-xl font-bold">
            Let&apos;s get in touch!
          </h1>
          <ContactOptions />
        </div>
        <ContactForm />
      </ContentBlock>
    </div>
  );
}
