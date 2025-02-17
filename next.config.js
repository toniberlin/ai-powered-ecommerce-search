/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.zara.net',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig; 