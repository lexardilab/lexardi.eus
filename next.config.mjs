// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
=======
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
>>>>>>> dev
      },
    ],
  },
};

export default nextConfig;

