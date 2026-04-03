/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo name is not pagename, you might need basepath
  // basePath: '/vinay_portfolio', 
};

export default nextConfig;
