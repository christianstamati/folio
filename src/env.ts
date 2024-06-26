import { createEnv } from "@t3-oss/env-nextjs";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({
  path: ".env.local",
});

// docs: https://env.t3.gg/docs/nextjs#use-your-schema
export const env = createEnv({
  server: {
    AWS_SES_SMTP_USER: z.string(),
    AWS_SES_SMTP_PASSWORD: z.string(),
    AWS_SES_EMAIL_TO: z.string().email(),
    UNDER_MAINTENANCE: z.string(),
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  client: {},
  experimental__runtimeEnv: {},
});
