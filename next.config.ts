import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: "/**"
      },
    ],
    
  },
  experimental: {
    optimizeCss: false
  },
  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production, but can be useful
    // during development to avoid type errors blocking the build.
  },
  allowedDevOrigins: ['http://localhost:3000'],
};

export default nextConfig;
