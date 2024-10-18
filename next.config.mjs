/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true
    },
    publicRuntimeConfig: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    output: 'standalone'
}


export default nextConfig;
