// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: '#94a3b8', // Example custom color
        customGreen: '#32CD32', // Another custom color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
