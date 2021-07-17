module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#273747",
        headerhover: "#6DBCDB"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
