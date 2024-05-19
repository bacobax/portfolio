const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(input|progress|slider|popover).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#171B25',
        coolCharcoal: '#998D88',
        goldenGlow: '#EDC789',
        blue: '#595655',
        gray: '#2C2E35',
      },
      fontFamily: {
        sans: ['DM Sans', 'monospace'],
        mono: ['Anonymous Pro', 'sans-serif'],
      },
    },
  },
  plugins: [nextui({

  })],

}
