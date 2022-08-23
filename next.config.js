/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: [
      'https://unpkg.com/primeicons/primeicons.css',
      'https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css',
      'https://unpkg.com/primereact/resources/primereact.min.css',
      'https://unpkg.com/primeflex@3.2.1/primeflex.min.css',
    ],
  },
};

module.exports = nextConfig;
