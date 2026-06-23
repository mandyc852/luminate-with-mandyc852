import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/readiness",
        destination: "/ipo-path",
        permanent: true,
      },
      {
        source: "/lumen",
        destination: "https://lumen-by-mandyc.vercel.app/how-it-works",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
