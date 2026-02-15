import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "@radix-ui/react-accordion",
      "@radix-ui/react-tooltip",
    ],
    inlineCss: true,
  },
};

export default nextConfig;
