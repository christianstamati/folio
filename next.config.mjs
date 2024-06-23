import { fileURLToPath } from "node:url";
import createJiti from "jiti";

// Validate env schema on build
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/env");

/** @category {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["placehold.co"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },

};
export default nextConfig;
