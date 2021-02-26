module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xl': '1366px'
    },
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'group-hover', 'hover', 'focus', 'active'],
    extend: {},
  },
  plugins: [],
}
