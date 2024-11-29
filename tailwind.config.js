/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blkfilm: {
        whisperfrost: "#f9faf6",
        urbanshadow: "#28282b",
        dynamicblaze: "#f94314",
        sunsetglow: "#EECF6D",
        mistylagoon: "#9AC6C5",
      },
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#252f3f",
        900: "#161e2e",
      },
      red: {
        50: "#fdf2f2",
        100: "#fde8e8",
        200: "#fbd5d5",
        300: "#f8b4b4",
        400: "#f98080",
        500: "#f05252",
        600: "#e02424",
        700: "#c81e1e",
        800: "#9b1c1c",
        900: "#771d1d",
      },
      yellow: {
        50: "#fdfdea",
        100: "#fdf6b2",
        200: "#fce96a",
        300: "#faca15",
        400: "#e3a008",
        500: "#c27803",
        600: "#9f580a",
        700: "#8e4b10",
        800: "#723b13",
        900: "#633112",
      },
      green: {
        50: "#f3faf7",
        100: "#def7ec",
        200: "#bcf0da",
        300: "#84e1bc",
        400: "#31c48d",
        500: "#0e9f6e",
        600: "#057a55",
        700: "#046c4e",
        800: "#03543f",
        900: "#014737",
      },
      blue: {
        50: "#ebf5ff",
        100: "#e1effe",
        200: "#c3ddfd",
        300: "#a4cafe",
        400: "#76a9fa",
      }
    },
    extend: {
      colors: {
        primary: '#5c6ac4', // Example color value for indigo
        danger: '#e3342f',  // Example color value for rose
        warning: '#ffed4a', // Example color value for yellow
        success: '#38c172', // Example color value for lime
        info: '#3490dc',    // Example color value for blue
        gray: '#6c757d',    // Example color value for zinc
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
};