/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  experimental: {
    serverActions: { allowedOrigins: ['neobik.com', 'www.neobik.com', 'localhost'] },
  },
  transpilePackages: ['@keystatic/core', '@keystatic/next'],
};

module.exports = nextConfig;