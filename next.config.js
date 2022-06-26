/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: { ignoreDuringBuilds: true },
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "i.picsum.photos",
            "cdn.sanity.io",
        ],
    },
};

module.exports = nextConfig;


// ignore ES Lint is not a good practice. It is temporary for now
