/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'shadow-bottom': '0 3px 0 red',
      },
    },
  },
  plugins: [],
};
