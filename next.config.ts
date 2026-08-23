import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // lets a verification build run alongside `npm run dev` without both writing .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
