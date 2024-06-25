import nodemailer from "nodemailer";
import { env } from "@/env";

const transporter = nodemailer.createTransport({
  host: "email-smtp.eu-central-1.amazonaws.com", // Use the SMTP endpoint for your SES region
  port: 587, // Port can be 587 or 465 for SMTP over TLS
  secure: false, // true for 465, false for other ports
  auth: {
    user: env.AWS_SES_SMTP_USER, // Your SMTP username from AWS SES
    pass: env.AWS_SES_SMTP_PASSWORD, // Your SMTP password from AWS SES
  },
});

export async function sendEmail(
  from: string,
  name: string,
  content: string,
): Promise<boolean> {
  const reply = `mailto:${from}`;
  const subject = name
    ? `New Portfolio Message from  ${name}`
    : "New Portfolio Message";

  const emailTo = env.AWS_SES_EMAIL_TO;

  try {
    return new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          // email of user
          from: "hello@christianstamati.com",
          to: emailTo,
          subject,
          html: `
          <html>
            <head>
              <style>
               .field{
                 display: flex;
                 flex-direction: row;
                 align-items: center;
                 justify-content: center;
               }
              </style>
            </head>
            <body>
              <main>
                <h3>Name: ${name}</h3>
                <h3>Email: ${from}</h3>
                <h3>Message:</h3>
                <p>${content}</p>
                <a href="${reply}">Reply</a>
              </main>
            </body>
          </html>
          `,
        },
        (err, info) => {
          if (err) {
            console.error("Failed to send mail: ", err);
            reject(false);
          } else {
            resolve(true);
          }
        },
      );
    });
  } catch (error) {
    console.error("Error in sending email: ", error);
    return false;
  }
}
