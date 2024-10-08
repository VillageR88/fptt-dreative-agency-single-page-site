/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ['./app/static/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        commissioner: ['"Commissioner"', 'sans-serif'],
      },
      screens: {
        screen1500: '1500px',
      },
    },
  },
  plugins: [],
};
