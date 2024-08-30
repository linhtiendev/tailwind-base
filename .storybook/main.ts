/* eslint-disable global-require */
/* eslint-disable no-param-reassign, no-shadow */
/* eslint-disable array-callback-return, consistent-return */
import * as path from 'path'

import type { StorybookConfig } from '@storybook/nextjs'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config: any) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    // This modifies the existing image rule to exclude `.svg` files
    // since we handle those with `@svgr/webpack`.
    const imageRule = config.module?.rules?.find((rule: any) => {
      if (typeof rule !== 'string' && rule?.test instanceof RegExp) {
        return rule?.test?.test('.svg')
      }
    })
    if (typeof imageRule !== 'string') {
      imageRule.exclude = /\.svg$/
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}
export default config
