/** @type {import('next').NextConfig} */

console.log(process.env);
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/],
});

const nextConfig = {
  productionBrowserSourceMaps: true,
  compress: true,
  basePath: process.env.BASE_DEPLOY_PATH,
  // assetPrefix: process.env.BASE_DEPLOY_PATH,
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
    removeConsole: process.env.NEXT_PUBLIC_NODE_ENV === "production",
  },
  images: {
    minimumCacheTTL: 600,
    formats: ["image/avif", "image/webp"],
    domains: ["oaidalleapiprodscus.blob.core.windows.net", "drive.google.com"],
    loader: "custom",
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = withPWA({
  ...nextConfig,
  ...(process.env.NODE_ENV === "production" && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
