import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**"
      }
    ]
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
