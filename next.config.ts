import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tokyo-salon-picks",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
