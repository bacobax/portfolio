/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
  plugins: [],
}
