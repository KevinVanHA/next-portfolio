/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server-side rendering for the entire app
  output: 'export',
  // Handle image optimization
  images: {
    unoptimized: true,
  },
  // Disable React strict mode if needed
  reactStrictMode: false,
};

export default nextConfig;
