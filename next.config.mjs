/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    publicRuntimeConfig: {
        API_URL: 'http://localhost:8080/',
    },
    output: 'standalone'
}


export default nextConfig;
