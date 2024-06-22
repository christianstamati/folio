import { fileURLToPath } from "node:url";
import createJiti from "jiti";

// Validate env schema on build
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/env");

/** @category {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },

};
export default nextConfig;
