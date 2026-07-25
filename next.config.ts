import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Evita que Turbopack tome un lockfile de un directorio padre (p. ej. monorepo local).
  turbopack: {
    root: path.join(process.cwd()),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.metodoq.pro",
          },
        ],
        destination: "https://metodoq.pro/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
