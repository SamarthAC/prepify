import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint:{
        ignoreDuringBuilds: true,
    },
    typescript:{
        ignoreBuildErrors: true,
    }
};

module.exports = {
    experimental: {
        turbo: {
            // Fix invalid sourcemap spam
            resolveAlias: {},
        },
    },
    productionBrowserSourceMaps: false,
    generateEtags: false,
};


export default nextConfig;
