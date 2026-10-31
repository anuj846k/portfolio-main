/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'github-contributions-api.jogruber.de' },
      { protocol: 'https', hostname: 'www.scalocx.com' },
      { protocol: 'https', hostname: 'api.accredible.com' },
      { protocol: 'https', hostname: 'images.credly.com' },
    ],
  },
};

export default nextConfig;
