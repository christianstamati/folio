"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea, TextareaProps } from "@/components/ui/textarea";
import LoadingButton from "@/components/loading-button";
import { sendMessageAction } from "@/app/contact/_actions/send-message.action";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { useRef } from "react";
import { TConductorInstance } from "react-canvas-confetti/src/types";
import { clsx } from "clsx";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

function FormInput({ className, ...rest }: InputProps) {
  const { error } = useFormField();
  return <Input className={clsx({ "border-red-400": error })} {...rest} />;
}

function FormTextArea({ className, ...rest }: TextareaProps) {
  const { error } = useFormField();
  return (
    <Textarea
      className={clsx({ "border-red-400": error }, className)}
      {...rest}
    />
  );
}

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const confettiRef = useRef<TConductorInstance | null>(null);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const [result, err] = await sendMessageAction({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (!result?.successful || err) {
      toast({
        variant: "destructive",
        title: "Failed to submit",
        description: "Something went wrong. Failed to send message.",
      });
      console.error(err);
      return;
    }

    confettiRef.current?.shoot();

    toast({
      title: "Success!",
      description: "Your message has been sent.",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-6 w-full space-y-3"
      >
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-primary">Your name</FormLabel>
                <FormControl>
                  <FormInput {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-primary">Your email</FormLabel>
                <FormControl>
                  <FormInput type={"email"} {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-primary">Your message</FormLabel>
              <FormControl>
                <FormTextArea className="h-40" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div />
        <LoadingButton
          className={"w-full"}
          size="lg"
          type="submit"
          loading={form.formState.isSubmitting}
        >
          Send
        </LoadingButton>
      </form>
      <Realistic
        onInit={(params) => {
          confettiRef.current = params.conductor;
        }}
      />
    </Form>
  );
}
