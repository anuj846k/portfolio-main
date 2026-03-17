/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'github.com',
      'raw.githubusercontent.com',
      'github-contributions-api.jogruber.de',
      'storage.googleapis.com',
    ],
  },
};

export default nextConfig;
