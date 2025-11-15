/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ipfs.io', 'pinata.cloud', 'zora.co', 'cdn.builder.io'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
