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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/loading-button";
import { sendMessageAction } from "@/app/contact/_actions/send-message.action";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

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

    toast({
      title: "Success!",
      description: "Your message has been sent.",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input type={"email"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea className="h-40" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          className={"w-full"}
          size="lg"
          type="submit"
          loading={form.formState.isSubmitting}
          loadingText="Sending..."
        >
          Send
        </LoadingButton>
      </form>
    </Form>
  );
}
