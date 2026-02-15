import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */ images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any HTTPS hostname
      },
      {
        protocol: 'http',
        hostname: '**', // Allows any HTTP hostname (use with caution)
      },
    ],
  },
};

export default nextConfig;
