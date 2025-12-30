/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sgp1.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cdn-caretutors.sgp1.cdn.digitaloceanspaces.com",
      }
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
