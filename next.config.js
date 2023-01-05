/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net", "drive.google.com"],
  },
  experimental: {
    newNextLinkBehavior: false,
  },
};
