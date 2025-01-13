import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  compiler: {
    styledComponents: true,  // styled-components ayarı
  },
};

export default nextConfig;