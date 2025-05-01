/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist', // Change the output directory to "dist"
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;