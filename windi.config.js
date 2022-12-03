export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sen'],
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': 'none',
            pre: {
              'border-radius': '0px',
            },
          },
        },
      },
    },
  },
  plugins: [require('windicss/plugin/typography')],
}
