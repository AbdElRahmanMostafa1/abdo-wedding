/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.istockphoto.com',
            }, 
            {
                hostname: 'scontent.fcai2-1.fna.fbcdn.net',
            }, 
            {
                hostname: "jd.exsythemes.com"
            }
        ]
    },
};

export default nextConfig;
