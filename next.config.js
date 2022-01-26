/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = {
  nextConfig,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "https://images.ctfassets.net/4rc1asww3mw7/1vY5LxWJ7VqQgJ0LDfLV4d/4495a05b12097bcaeffb1892ad5b6cfd/1x1_featured_content_Gucci__1_.jpg?w=360&h=492&q=75&fm=webp",
    ],
  },
};
