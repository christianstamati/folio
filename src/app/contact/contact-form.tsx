"use client";
import React, { useEffect } from "react";
import sendMessageAction from "@/app/contact/_actions/send-message.action";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { clsx } from "clsx";
import { SyncLoader } from "react-spinners";
import { toast } from "@/components/ui/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className={"rounded-xl p-7"} type={"submit"}>
      {pending ? <SyncLoader size={8} color="#ffffff" /> : "Send"}
    </Button>
  );
}

function ContactForm() {
  const [formState, formAction] = useFormState(sendMessageAction, {
    message: "",
    errors: undefined,
    fields: {
      name: "",
      email: "",
      content: "",
    },
  });

  useEffect(() => {
    if (formState.message === "success") {
      toast({
        title: "Success!",
        description: "The message was successfully sent.",
      });
    } else if (formState.message === "send-error") {
      toast({
        variant: "destructive",
        title: "Failed to send!",
        description: "Ops, something went wrong!",
      });
    }
  }, [formState]);

  return (
    <form action={formAction} className="flex w-full flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full">
          <Input
            defaultValue={formState.fields.name}
            className={clsx("h-12 rounded-xl", {
              "border-red-400": formState.errors?.name,
            })}
            name={"name"}
            placeholder="Your name"
          />
          <span className="text-left text-sm text-red-400">
            {formState.errors?.name}
          </span>
        </div>
        <div className="w-full">
          <Input
            defaultValue={formState.fields.email}
            className={clsx("h-12 rounded-xl", {
              "border-red-400": formState.errors?.email,
            })}
            name={"email"}
            placeholder="Your email"
          />
          <span className="text-left text-sm text-red-400">
            {formState.errors?.email}
          </span>
        </div>
      </div>
      <div>
        <Textarea
          defaultValue={formState.fields.content}
          className={clsx("h-[250px] rounded-xl py-3", {
            "border-red-400": formState.errors?.content,
          })}
          name={"content"}
          placeholder="Your message"
        />
        <span className="text-left text-sm text-red-400">
          {formState.errors?.content}
        </span>
      </div>
      <SubmitButton />
    </form>
  );
}

export default ContactForm;
