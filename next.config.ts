import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/readiness",
        destination: "/consulting",
        permanent: true,
      },
      {
        source: "/ipo-path",
        destination: "/consulting",
        permanent: true,
      },
      {
        source: "/ipo-path/:path*",
        destination: "/consulting",
        permanent: true,
      },
      {
        source: "/fund",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cohort",
        destination: "/",
        permanent: true,
      },
      {
        source: "/leap",
        destination: "/",
        permanent: true,
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
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lumina-consult.com" }],
        destination: "https://mandyc.me/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
