/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'preview.colorlib.com',
      'gw.alipayobjects.com',
      // server test
      'vataloyalty-api-test.blueskytech.vn',
      // server dev
      'vataloyalty-api.blueskytech.vn',
      'api.vataloyalty.com.vn',
    ],
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // example: *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts|md)x?$/] },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: { icon: true },
          },
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      }
    )
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
}

module.exports = nextConfig
