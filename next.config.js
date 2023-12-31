const prod = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: prod ? false : true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Por ahora, dejo el hostname como cualquiera con '**' como dice en los Docs de Next.js
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      }
    ],
  },
});

module.exports = nextConfig;
