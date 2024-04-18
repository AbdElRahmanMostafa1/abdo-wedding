/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.istockphoto.com',
            }, 
            {
                hostname: "jd.exsythemes.com"
            }
        ]
    },
};

export default nextConfig;
