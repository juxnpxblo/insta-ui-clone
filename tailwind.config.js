const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        md: '876px',
        sm: '614px',
      },
    },
  },
  plugins: [],
};
