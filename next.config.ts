/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-ced-uploads-01.s3.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
