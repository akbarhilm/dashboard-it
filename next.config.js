/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    API_HOST:process.env.API_HOST
  },
  images: {
    domains: ["avatars.githubusercontent.com", "avatar.vercel.sh"],
  },
};

module.exports = nextConfig;
