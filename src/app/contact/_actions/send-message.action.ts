"use server";
import { sendEmail } from "@/server/send-email";
async function sendMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    console.error("Please enter a valid email address");
    return;
  }

  await sendEmail(email, name, message);
  console.log("Sending message...", formData);
}

export default sendMessage;
