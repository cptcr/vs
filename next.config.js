/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ replaces next export
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
