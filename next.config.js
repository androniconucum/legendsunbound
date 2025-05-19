/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // Configure serverless function size limit
  serverless: {
    maxPayload: '100mb',
  },
}

module.exports = nextConfig 