"use server";
import { createServerAction } from "zsa";
import z from "zod";
import { sendEmail } from "@/server/send-email";

export const sendMessageAction = createServerAction()
  .input(
    z.object({
      name: z.string().min(2),
      email: z.string().email(),
      message: z.string().min(5),
    }),
  )
  .output(
    z.object({
      successful: z.boolean(),
    }),
  )
  .handler(async ({ input }) => {
    const successful = await sendEmail(input.email, input.name, input.message);
    return { successful };
  });
