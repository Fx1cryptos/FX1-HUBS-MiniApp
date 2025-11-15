/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
      {
        protocol: 'https',
        hostname: 'pinata.cloud',
      },
      {
        protocol: 'https',
        hostname: 'zora.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
