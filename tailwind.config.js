/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ['./app/static/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
