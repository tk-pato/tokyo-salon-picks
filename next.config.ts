import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bust-tokyo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
