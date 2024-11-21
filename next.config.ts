import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  /* other config options here */
};

module.exports = {
  output: 'export',
};


export default nextConfig;
