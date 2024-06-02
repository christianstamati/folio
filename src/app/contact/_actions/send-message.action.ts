"use server";
import { z, ZodError } from "zod";
import { sendEmail } from "@/server/send-email";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must contain at least 2 characters" }),
  email: z.string().email({ message: "This is not a valid email address" }),
  content: z.string({ message: "Invalid content message" }),
});

type Fields = {
  name: string;
  email: string;
  content: string; // at least 14 characters
};

type FormState = {
  message: string;
  errors?: Record<keyof Fields, string> | undefined;
  fields: Fields;
};

async function sendMessageAction(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const content = formData.get("content") as string;

  const fields = {
    name,
    email,
    content,
  };

  const parseResult = schema.safeParse(fields);

  if (!parseResult.success) {
    const error = parseResult.error as ZodError;
    const errorMap = error.flatten().fieldErrors;
    return {
      message: "error",
      errors: {
        name: errorMap["name"]?.[0] ?? "",
        email: errorMap["email"]?.[0] ?? "",
        content: errorMap["content"]?.[0] ?? "",
      },
      fields,
    };
  }

  const data = parseResult.data;

  const success = await sendEmail(data.email, data.name, data.content);

  if (!success) {
    return {
      message: "send-error",
      errors: undefined,
      fields,
    };
  }

  return {
    message: "success",
    errors: undefined,
    fields: {
      name: "",
      email: "",
      content: "",
    },
  };
}

export default sendMessageAction;
