module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'cookie': ['Cookie', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
