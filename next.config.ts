import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // 🔥 desactiva lightningcss
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "declara.jne.gob.pe",
        pathname: "/Assets/Fotos-HojaVida/**",
      },
    ],
  },
};

export default nextConfig;
