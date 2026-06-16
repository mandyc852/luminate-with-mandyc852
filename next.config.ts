import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/readiness",
        destination: "/ipo-path",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
