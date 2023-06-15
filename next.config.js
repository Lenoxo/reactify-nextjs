/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'img.com'],
  },
});

module.exports = nextConfig;
