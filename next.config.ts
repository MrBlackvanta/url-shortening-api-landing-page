import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactCompiler: true,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
