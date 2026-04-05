/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/vinay_portfolio" : "",
  assetPrefix: isProd ? "/vinay_portfolio/" : "",
};

export default nextConfig;
