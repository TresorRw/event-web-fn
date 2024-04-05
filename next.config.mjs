/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
        port: '',
        pathname: '/img/new/standard/nature/184.jpg',
      },
    ],
  },
};

export default nextConfig;
