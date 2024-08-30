// eslint-disable-next-line import/no-import-module-exports
import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // This is needed to some cases that Tailwind need to override Antd
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
      },
      colors: {
        // use for test
        detailProduct: {
          gray: '#767676',
          red: '#FF0000',
          blue: '#0D57FF',
        },
        // Loyalty colors
        loyalty: {
          black: {
            500: '#4F5665',
            600: '#0B132A',
          },
          orange: {
            50: '#FFFBE5',
            100: '#FFF5F2', // background search input
            200: '#FFF0EB', // cart button normal
            300: '#FFD2C2', // cart button hover
            400: '#F7951B', // border outline button
            500: '#F66A24', // button primary normal
            600: '#E04B00', // button primary hover
          },
          green: {
            100: '#EBFFEF',
            300: '#00B924',
            500: '#2FAB73',
          },
          white: {
            300: '#F8F8F8',
            600: '#F1F1F1',
          },
          gray: {
            50: '#767676',
            100: '#EEEFF2',
            200: '#E3E3E3',
            300: '#f7f7f9',
            400: '#DDDDDD',
            500: '#AFB5C0',
            600: '#A7A7A7',
            label: '#767676',
          },
          blue: {
            100: '#EFF3FA',
            200: '#6C7E93',
            300: '#004EFF',
            400: '#0d57ff',
            500: '#3E5480',
            600: '#0D57FF',
            700: '#192252', // text cancel button
          },
          red: {
            100: '#FFF0EB',
            500: '#FF0000',
          },
        },
        gameCenter: {
          yellow: '#f5ff00',
          orangeDark: '#f5aa4b',
        },
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: 0,
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateZ(0)',
          },
        },
      },
      animation: {
        fadeInDown: '300ms ease-in-out 0s normal none 1 running fadeInDown',
      },
      boxShadow: {
        'loyalty-card':
          '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
      },
      screens: {
        mobile: '640px', // => @media (min-width: 640px)
        tablet: '768px', // => @media (min-width: 768px)
        laptop: '1024px', // => @media (min-width: 1024px)
        desktop: '1280px', // => @media (min-width: 1280px)
        ultra: '1536px', // => @media (min-width: 1536px)
      },
    },
  },
}
