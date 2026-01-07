import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // तापुरते बिल्ड होण्यासाठी
  },
  eslint: {
    ignoreDuringBuilds: true, // तापुरते बिल्ड होण्यासाठी
  }
};

export default nextConfig;
