// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    domains: ['rdl.ink'],
    unoptimized: true,
  },
  output: 'export',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.md|\.mdx|\.webp$/,
      use: 'raw-loader',
    });

    return config;
  },
};
