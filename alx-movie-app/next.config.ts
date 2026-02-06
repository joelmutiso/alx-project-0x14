import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next"; // 1. Import the type

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

export default withPWA(nextConfig);