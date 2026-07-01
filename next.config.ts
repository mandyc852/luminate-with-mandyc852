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
      {
        source: "/executive-readiness",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/the-five-questions",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/the-five-questions/thank-you",
        destination: "/guide",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "lumina-consult.com" }],
        destination: "https://mandyc.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
