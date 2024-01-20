/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
      // Disable webpack cache in development
      if (dev) {
        config.cache = false;
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;