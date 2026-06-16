/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    domains: [],
  },
  env: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
};

export default nextConfig;
