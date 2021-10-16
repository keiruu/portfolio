module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "raleway": ["Raleway"],
      "montserrat": ["Montserrat"],
      "inter": ["Inter"]
    },
    extend: {
      inset: {
        '0': 0,
        '0.1': '0.05rem',
        '-0.1': '-0.05rem',
        '22': '5.5rem',
        '29': '7.06rem',
        '30': '7.1rem',
      },
      colors: {
        pink: '#FBA7A0',
        gray: '#7D7D7D',
        dark: '#232323'
      },
      boxShadow: {
        pink: '-1px 0px 27px -4px rgba(248,113,101,0.35)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
