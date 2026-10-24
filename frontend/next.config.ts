import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Las fotos de productos vendrán de Cloudinary
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;
