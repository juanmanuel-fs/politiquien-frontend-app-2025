import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
