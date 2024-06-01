import nodemailer from "nodemailer";
import * as aws from "@aws-sdk/client-ses";
import { env } from "@/env";

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: "eu-central-1",
  credentials: {
    accessKeyId: env.AWS_SES_ACCESS_KEY,
    secretAccessKey: env.AWS_SES_SECRET,
  },
});

const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

export async function sendEmail(from: string, name: string, message: string) {
  const reply = `mailto:${from}`;
  const subject = name
    ? `New Portfolio Message from  ${name}`
    : "New Portfolio Message";

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: "hello@christianstamati.com",
          to: "christian.stamati@gmail.com",
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
                <p>${message}</p>
                <a href="${reply}">Reply</a>
              </main>
            </body>
          </html>
          `,
        },
        (err, info) => {
          if (err) {
            console.error("Failed to send mail: ", err);
            reject(err);
          } else {
            resolve(info);
          }
        },
      );
    });
  } catch (error) {
    console.error("Error in sending email: ", error);
  }
}
