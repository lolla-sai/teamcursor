/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "i.picsum.photos",
            "cdn.sanity.io",
        ],
    },
};

module.exports = nextConfig;
