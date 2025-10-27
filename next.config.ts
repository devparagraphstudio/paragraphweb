/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Temporarily disabled to fix routing issues
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: '/',
    basePath: '',
    webpack: (
        config: Parameters<NonNullable<import('next').NextConfig['webpack']>>[0]
    ) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            type: 'asset/resource',
        });
        return config;
    },
};

export default nextConfig;
