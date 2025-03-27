import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // Firebase Storage
        pathname: "/v0/b/**", // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
